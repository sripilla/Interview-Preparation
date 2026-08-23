# Multimodal Prompting — Practice Questions & Answers

---

## Q21 — Handwritten Prescription OCR with Confidence Flagging

**Question:**
A pharmacy app lets users upload photos of handwritten doctor prescriptions. Handwriting varies wildly in legibility, and misreading a drug name or dosage could be dangerous. Design a prompt that transcribes the prescription and flags any field the model isn't confident about, rather than guessing.

**Technique Used:** Multimodal Prompting (OCR + Reasoning) + Guardrails

**Answer:**

```
You are a prescription transcription assistant. You will be shown a photo of a handwritten doctor's prescription.

TASK:
Extract the following fields:
- patient_name
- medication_name
- dosage
- frequency
- duration
- doctor_name
- date

CRITICAL SAFETY RULE:
This is medical information — accuracy matters more than completeness. If ANY field is even slightly ambiguous, unclear, or could be misread (especially medication_name and dosage), do NOT guess. Mark it as "UNCLEAR - NEEDS PHARMACIST REVIEW" instead of providing a best guess.

Only provide a confident transcription for fields you can read with high certainty.

OUTPUT FORMAT (JSON):
{
  "patient_name": { "value": "string or UNCLEAR", "confidence": "high" | "low" },
  "medication_name": { "value": "string or UNCLEAR", "confidence": "high" | "low" },
  "dosage": { "value": "string or UNCLEAR", "confidence": "high" | "low" },
  "frequency": { "value": "string or UNCLEAR", "confidence": "high" | "low" },
  "duration": { "value": "string or UNCLEAR", "confidence": "high" | "low" },
  "doctor_name": { "value": "string or UNCLEAR", "confidence": "high" | "low" },
  "date": { "value": "string or UNCLEAR", "confidence": "high" | "low" },
  "requires_human_review": boolean
}

Set requires_human_review to true if ANY field has low confidence.
```

**Why this works:** In a medical context, a wrong guess is far more dangerous than an honest "I'm not sure" — so the prompt explicitly forbids guessing on ambiguous fields and forces a binary human-review flag, turning uncertainty into a safe escalation path instead of a silent error.

---

## Q22 — Multi-Image Product Defect Comparison

**Question:**
An e-commerce return system receives two photos from a customer: one of the product "as advertised" (from the listing) and one of the product "as received." Support agents need a quick, structured comparison to decide if a return claim is valid. Design a prompt that compares the two images and outputs a structured discrepancy report.

**Technique Used:** Multimodal Prompting (Image Comparison/Diffing) + Structured Output

**Answer:**

```
You are a product returns investigator. You will be shown two images:
Image A: the product as shown in the original listing (expected condition).
Image B: the product as received by the customer (actual condition).

TASK:
Compare Image A and Image B and identify any visible discrepancies relevant to a return/refund decision — damage, missing parts, color/model mismatch, incorrect item, or wear that wouldn't be expected for a new item.

RULES:
- Only report differences you can clearly see — do not speculate about damage that isn't visible.
- Ignore differences due to lighting, angle, or photo quality alone — focus on the actual product.
- Rate the severity of each discrepancy found.

OUTPUT FORMAT (JSON):
{
  "discrepancies_found": boolean,
  "discrepancies": [
    {
      "description": "string",
      "category": "damage" | "missing_part" | "wrong_item" | "color_mismatch" | "wear" | "other",
      "severity": "minor" | "moderate" | "severe"
    }
  ],
  "recommended_action": "APPROVE_RETURN" | "REQUEST_MORE_INFO" | "DENY_RETURN",
  "reasoning": "string (1-2 sentences)"
}

Recommendation guide:
- APPROVE_RETURN if severe or moderate discrepancies are clearly visible
- REQUEST_MORE_INFO if discrepancies are ambiguous or minor but unclear
- DENY_RETURN if no meaningful discrepancy is found
```

**Why this works:** Explicitly telling the model to ignore lighting/angle differences (visual noise) and focus only on product-relevant discrepancies prevents false positives, while mapping each finding to a severity level and a recommended action turns a vague visual comparison into a decision-ready output for support agents.

---

## Q23 — Chart-to-Table Extraction with Axis Ambiguity Handling

**Question:**
A financial analyst uploads screenshots of quarterly earnings bar charts (no underlying data available) and needs the approximate values converted into a table for further analysis. Chart axis labels are sometimes cropped or hard to read precisely. Design a prompt that extracts chart data into a table while being transparent about estimation uncertainty.

**Technique Used:** Multimodal Prompting (Chart/Data Reading) + Extraction

**Answer:**

```
You are a chart data extraction assistant. You will be shown an image of a bar chart (or similar chart type) representing quarterly financial data.

TASK:
Extract the approximate value for each bar/category shown in the chart.

RULES:
- Read axis labels and gridlines carefully to estimate values as precisely as possible.
- If axis labels are cropped, blurry, or missing, estimate values based on relative bar height/position compared to visible gridlines, and mark these as "ESTIMATED" rather than "READ".
- Never fabricate a precise-looking number (e.g., "42.7") when you're actually estimating from bar height — round estimated values appropriately and flag them.
- If the chart title, units (e.g., $M, %), or time period are visible, include them.

OUTPUT FORMAT:
Return a markdown table with these columns:
| Category | Value | Unit | Source (READ or ESTIMATED) |

Followed by:
- Chart title (if visible): string
- Any notes on ambiguous or unreadable elements

Now extract the data from the provided chart image.
```

**Why this works:** Distinguishing "READ" (directly labeled values) from "ESTIMATED" (inferred from bar height) prevents the analyst from mistaking a rough visual estimate for an exact reported figure, which matters a lot in financial contexts where precision claims can be misleading if unqualified.

---

## Q24 — Visual Question Answering for Safety Compliance Checks

**Question:**
A construction site safety app lets supervisors upload site photos and ask specific compliance questions (e.g., "Is everyone wearing a hard hat?"). The model needs to answer precise, narrow questions accurately rather than giving a vague general description. Design a VQA prompt structure for this use case.

**Technique Used:** Multimodal Prompting (Visual Question Answering)

**Answer:**

```
You are a construction site safety compliance assistant. You will be shown a photo of a job site and asked a specific yes/no or factual question about visible safety conditions.

TASK:
Answer the specific question asked — do not provide a general description of the whole image unless explicitly asked.

RULES:
- Base your answer only on what is clearly visible in the image.
- If the image quality, angle, or occlusion makes it impossible to confidently answer, say so explicitly rather than guessing (e.g., "Cannot determine — partially obscured by scaffolding").
- For counting questions (e.g., "how many workers are wearing hard hats"), count carefully and note if any individuals are only partially visible or ambiguous.
- For compliance questions, reference the specific visual evidence supporting your answer.

OUTPUT FORMAT:
{
  "question": "string (the question asked)",
  "answer": "string (direct, specific answer)",
  "confidence": "high" | "medium" | "low",
  "evidence": "string (what in the image supports this answer)",
  "caveats": "string or null (any visibility/ambiguity issues)"
}

Question: "{safety_question}"
```

**Why this works:** Narrow, targeted questions need narrow, targeted answers — forcing the model to justify its answer with visual evidence and flag low-confidence or partially-obscured cases prevents overconfident compliance calls that could have real safety consequences if wrong.

---

## Q25 — Meeting Whiteboard-to-Action-Items Converter

**Question:**
Teams often photograph whiteboards at the end of brainstorming sessions containing a messy mix of diagrams, arrows, bullet points, and crossed-out ideas. Design a multimodal prompt that converts a whiteboard photo into a clean, structured list of action items with owners (if visible) and priority.

**Technique Used:** Multimodal Prompting (Image + Text Instruction) + Extraction

**Answer:**

```
You are a meeting notes assistant. You will be shown a photo of a whiteboard from a brainstorming or planning session, which may contain diagrams, arrows, bullet points, sticky notes, and crossed-out or edited text.

TASK:
Convert the visible whiteboard content into a clean, structured list of action items.

RULES:
- Ignore content that is clearly crossed out, scribbled over, or marked as discarded — do not include it as an action item.
- If an item has a name or initials next to it (suggesting an owner), extract that as the owner; otherwise mark owner as "UNASSIGNED".
- If priority is indicated visually (underlines, stars, circles, "urgent" labels, position at top), reflect that; otherwise mark priority as "UNSPECIFIED".
- Distinguish between action items (things to DO) and general notes/ideas (things discussed but not actionable) — only include actual action items in the main list, and put other notes in a separate section.
- If handwriting is unclear for a specific item, extract what's readable and mark unclear portions with [UNCLEAR].

OUTPUT FORMAT:
## Action Items
1. [Action item] — Owner: [name/UNASSIGNED] — Priority: [level/UNSPECIFIED]
2. ...

## Other Notes / Ideas (non-actionable)
- ...

## Unclear / Needs Follow-up
- [any illegible sections or ambiguous items worth double-checking with the team]
```

**Why this works:** Whiteboards mix actionable items with general discussion and crossed-out dead ends, so explicitly telling the model to exclude discarded content and separate "action items" from "notes" prevents a cluttered, unusable output — while the owner/priority extraction only when visually indicated (not invented) keeps the result honest to what was actually on the board.