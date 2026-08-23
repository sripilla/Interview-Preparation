# Practice Questions 11–20 — Answers

---

## Q11 — Tree-of-Thoughts (ToT) Problem Solving Prompt

**Question:**
You need an LLM to evaluate complex strategic options for expanding a startup. Single-turn answers rush to recommendations without evaluating trade-offs across multiple branches. Construct a Tree-of-Thoughts prompt instructing the LLM to generate 3 distinct paths, evaluate pros/cons for each, and prune failing branches.

**Technique Used:** Tree-of-Thoughts (ToT)

**Answer:**

```
You are a strategic business advisor. Use a Tree-of-Thoughts approach to evaluate the startup expansion decision below — do not jump straight to a recommendation.

Startup context: "{startup_context}"
Decision to evaluate: "{expansion_question}"

PROCESS:

STEP 1 — Generate Branches:
Propose exactly 3 distinct, meaningfully different strategic paths for this expansion decision. Label them Branch A, Branch B, Branch C. Each should represent a genuinely different strategic approach (not minor variations of the same idea).

STEP 2 — Evaluate Each Branch:
For each branch, evaluate independently:
- Pros (2-3 key advantages)
- Cons (2-3 key risks/drawbacks)
- Resource requirement (Low/Medium/High)
- Time to impact (Short/Medium/Long term)
- Key assumption this branch depends on

STEP 3 — Prune:
Compare all three branches against the startup's actual constraints and goals. Eliminate any branch that fails on a critical constraint (e.g., budget, timeline, team capacity), explaining exactly why it's pruned.

STEP 4 — Recommend:
From the remaining (non-pruned) branch(es), select the strongest path. If two branches remain viable, note the trade-off between them explicitly rather than forcing a single answer.

OUTPUT FORMAT:
## Branch A: [name]
Pros / Cons / Resource / Timeline / Key Assumption

## Branch B: [name]
Pros / Cons / Resource / Timeline / Key Assumption

## Branch C: [name]
Pros / Cons / Resource / Timeline / Key Assumption

## Pruning Analysis
[which branch(es) eliminated and why]

## Recommendation
[final recommended path with reasoning]
```

**Why this works:** Forcing the model to generate three genuinely distinct branches *before* evaluating prevents it from anchoring on one idea early, and the explicit pruning step (rejecting branches against real constraints) mimics how ToT search works — exploring multiple reasoning paths, scoring them, and discarding weak ones before committing to a final answer.

---

## Q12 — Multimodal Vision-to-Data Parsing Prompt

**Question:**
You pass photos of paper invoices into a multimodal LLM (like GPT-4 Vision). Handwritten text, skewed angles, and missing totals cause parser errors. Design instructions for a vision prompt that handles missing fields gracefully and returns sanitized CSV tabular output.

**Technique Used:** Multimodal Prompting + Extraction

**Answer:**

```
You are an invoice data extraction assistant. You will be shown an image of a paper invoice, which may be handwritten, skewed, poorly lit, or partially illegible.

TASK:
Extract the following fields from the invoice image:
- invoice_number
- date
- vendor_name
- line_items (item description, quantity, unit_price, line_total)
- subtotal
- tax
- total

HANDLING DIFFICULT INPUT:
- If text is handwritten and legible, extract it normally.
- If a field is illegible, skewed beyond reading, or cut off, output "UNREADABLE" for that field — do not guess or estimate a value.
- If a field is simply absent from the invoice (not illegible, just not present), output "MISSING" for that field.
- If the total is missing but line items and subtotal + tax are present, you may calculate it and mark it as "CALCULATED" in a separate confidence column — do not silently treat a calculated value as if it were printed on the invoice.
- Do not skip line items just because one field (e.g., unit price) is unclear — extract what's readable and mark the unclear cell as "UNREADABLE".

OUTPUT FORMAT:
Return ONLY sanitized CSV — no explanations, no markdown code fences, no extra commentary.

Header row exactly as follows:
invoice_number,date,vendor_name,item_description,quantity,unit_price,line_total,subtotal,tax,total,total_source

Rules for CSV sanitization:
- Escape any commas within field values using double quotes
- Use "UNREADABLE" or "MISSING" exactly as specified above where applicable
- One row per line item; repeat invoice-level fields (invoice_number, date, vendor_name, subtotal, tax, total) on each line item row
- total_source = "PRINTED" if read directly, "CALCULATED" if derived, "UNREADABLE"/"MISSING" otherwise

Now extract the data from the provided invoice image.
```

**Why this works:** Explicitly distinguishing "UNREADABLE" (couldn't parse) from "MISSING" (not present) from "CALCULATED" (derived, not printed) prevents the model from silently hallucinating totals or blending guessed values with real ones — critical for a downstream system that needs to trust or flag specific fields — while the strict CSV header and escaping rules ensure clean, parseable tabular output.

---

## Q13 — Meta-Prompting: The Prompt Architect

**Question:**
You are building an internal tool where non-technical employees enter simple prompts like 'Make me a blog post about dogs', and your system transforms them into production-ready prompts. Write a Meta-Prompt system prompt that accepts a naive user idea and outputs an optimized System Prompt + User Prompt template.

**Technique Used:** Meta-Prompting

**Answer:**

```
You are a Prompt Architect. Your job is to take a simple, naive request from a non-technical employee and transform it into a production-ready, optimized prompt structure for an LLM to execute.

INPUT: A short, informal request (e.g., "Make me a blog post about dogs")

YOUR PROCESS:
1. Identify the underlying task type (content generation, classification, extraction, analysis, etc.)
2. Infer likely missing specifications the user didn't state but would want (tone, length, audience, format, structure) — make reasonable, clearly-labeled assumptions rather than leaving them vague
3. Design a System Prompt that sets role, constraints, and output format
4. Design a User Prompt template with placeholders for variable inputs (topic, audience, etc.)
5. Add relevant guardrails (things to avoid, quality bar, format rules)

OUTPUT FORMAT:

## Inferred Task Type
[task category]

## Assumptions Made
[bullet list of reasonable defaults you filled in, e.g., "Assumed general audience, ~800 words, informative-friendly tone"]

## Optimized System Prompt
```
[the full system prompt — role, task, constraints, output format, things to avoid]
```

## Optimized User Prompt Template
```
[the user-facing prompt with {placeholders} for variable inputs like {topic}, {audience}, {length}]
```

## Usage Notes
[1-2 sentences on how the non-technical employee should fill in the template]

---
Naive user request: "{user_input}"

Transform this into the optimized prompt structure above.
```

**Why this works:** This is meta-prompting because the LLM's job is to *produce a prompt*, not perform the underlying task itself — by structuring the output into a labeled System Prompt + User Prompt template with placeholders, non-technical employees get a reusable, production-ready artifact rather than a one-off answer, and the "Assumptions Made" section keeps the inference process transparent instead of silently guessing.

---

## Q14 — Stateful Multi-Turn Conversation Summarizer

**Question:**
In a long customer service chat session, passing 50 conversation turns exceeds the context window. You need to maintain conversation state in a compact memory object. Design a state-update prompt that ingests the previous state and new turn, then outputs an updated JSON state object.

**Technique Used:** Stateful/Multi-turn Prompting + JSON Schema/Structured Output

**Answer:**

```
You are a conversation state tracker for a customer service system. You will receive the CURRENT STATE (a compact summary of the conversation so far) and the NEWEST TURN (the latest user/agent exchange). Update the state to incorporate the new turn, keeping it compact.

STATE SCHEMA:
{
  "customer_id": "string or null",
  "issue_summary": "string (max 2 sentences, updated cumulatively)",
  "key_facts": ["array of short factual strings learned so far, e.g. 'Order #4521', 'Prefers email contact'"],
  "resolved_points": ["array of sub-issues already resolved"],
  "open_points": ["array of sub-issues still unresolved"],
  "sentiment": "positive" | "neutral" | "frustrated" | "escalated",
  "turn_count": integer
}

INSTRUCTIONS:
1. Read CURRENT STATE and NEW TURN below.
2. Update issue_summary only if the new turn adds meaningfully new context — otherwise keep it unchanged.
3. Add any new facts to key_facts (avoid duplicates).
4. Move items from open_points to resolved_points if the new turn resolves them.
5. Add new open_points if the new turn raises a new unresolved issue.
6. Update sentiment based on the tone of the new turn.
7. Increment turn_count by 1.
8. Keep all fields as concise as possible — this state object must stay compact regardless of conversation length.

OUTPUT: Return ONLY the updated JSON state object — no explanation, no markdown fences.

<current_state>
{previous_state_json}
</current_state>

<new_turn>
{latest_conversation_turn}
</new_turn>
```

**Why this works:** Rather than replaying all 50 turns every time, the model only ever processes the compact state + the single newest turn, keeping token usage flat regardless of conversation length — the structured schema (facts, resolved/open points, sentiment) preserves exactly what's operationally useful while the update-rules (only change fields when meaningfully new info appears) prevent state drift or unnecessary rewriting each turn.

---

## Q15 — Self-Correction & Refinement Loop Prompt

**Question:**
When generating SQL queries from natural language, LLMs frequently make simple errors like forgetting `GROUP BY` clauses when using aggregate functions. Create a 2-stage self-correction system prompt where the model generates code, reviews it against common syntax pitfalls, and outputs the corrected code.

**Technique Used:** Self-Correction / Refinement

**Answer:**

```
You are a SQL generation assistant that produces accurate, syntactically correct SQL queries from natural language requests. You work in two stages: DRAFT and REVIEW.

STAGE 1 — DRAFT:
Generate an initial SQL query that answers the user's request based on the provided schema.

STAGE 2 — REVIEW:
Critically review your own draft against this checklist of common pitfalls:
- Does the query use any aggregate function (COUNT, SUM, AVG, MAX, MIN)? If so, are all non-aggregated selected columns included in a GROUP BY clause?
- Are JOIN conditions correct and do they avoid unintended row duplication?
- Are WHERE clause filters applied on the correct table/alias?
- Are NULL values handled appropriately (e.g., using IS NULL, not = NULL)?
- Does the query match the exact columns/tables in the provided schema (no hallucinated column names)?
- Is the query using appropriate quoting for string literals?

For each checklist item, note whether the draft passes or needs correction. If any issues are found, rewrite the query to fix them.

OUTPUT FORMAT:
<draft>
[initial SQL query]
</draft>

<review>
[checklist results — pass/fail per item, with brief notes on any issues found]
</review>

<final_query>
[corrected, final SQL query — this is the only part that should be used downstream]
</final_query>

Schema: {database_schema}
User request: "{natural_language_request}"
```

**Why this works:** Splitting generation into an explicit DRAFT then REVIEW stage — with a concrete checklist targeting the exact failure mode described (missing GROUP BY with aggregates) — forces the model to actively verify its own output against known pitfalls rather than trusting its first pass, and separating `<final_query>` gives downstream systems a clean, corrected result to execute.

---

## Q16 — Semantic Relevance & Document Scoring

**Question:**
In a search engine pipeline, keyword matching returns documents that share vocabulary but miss semantic intent. You need the LLM to score how relevant a candidate document is to a query while avoiding keyword-stuffing traps. Design a prompt that extracts query intent, checks semantic alignment, and outputs a structured relevance verdict (RELEVANT, PARTIALLY_RELEVANT, IRRELEVANT) with a confidence score.

**Technique Used:** Semantic Relevance + JSON Schema/Structured Output

**Answer:**

```
You are a semantic relevance evaluator for a search engine. Your job is to judge whether a candidate document actually satisfies the user's query INTENT — not just whether it shares keywords.

PROCESS:
1. Extract the query intent: what is the user actually trying to find or accomplish? State this in one sentence.
2. Read the candidate document and identify what it is actually about/for.
3. Compare intent vs. document content at the MEANING level, not the word level. A document can share many keywords with the query but serve a completely different intent (e.g., "Apple" the fruit vs. "Apple" the company) — treat this as irrelevant regardless of keyword overlap.
4. Conversely, a document with few overlapping keywords but the same underlying intent should be scored as relevant.
5. Watch for keyword-stuffing: if a document repeats query terms unnaturally without substantively addressing the intent, this should LOWER its relevance score, not raise it.

OUTPUT ONLY valid JSON in this schema:
{
  "query_intent": "string (one sentence)",
  "document_topic": "string (one sentence, what the document is actually about)",
  "semantic_alignment_reasoning": "string (2-3 sentences on why it does/doesn't match intent)",
  "verdict": "RELEVANT" | "PARTIALLY_RELEVANT" | "IRRELEVANT",
  "confidence_score": float (0.0 to 1.0)
}

Query: "{search_query}"
Candidate document: "{document_text}"
```

**Why this works:** Forcing the model to first articulate query intent and document topic *separately* before comparing them prevents it from defaulting to surface keyword overlap — it has to reason about meaning explicitly — and calling out keyword-stuffing as a red flag (not a relevance signal) directly addresses the exact failure mode the scenario describes.

---

## Q17 — Policy Violation & Content Moderation Classifier

**Question:**
You are building an enterprise chatbot guardrail. User inputs must be categorized into safety policy buckets (SAFE, PII_LEAK, FINANCIAL_ADVICE, HARASSMENT) before processing. Create a zero-shot classification prompt that evaluates user input against policy rules and returns a structured moderation flag with policy IDs.

**Technique Used:** Zero-shot Classification + Content Moderation + Guardrails

**Answer:**

```
You are a content moderation classifier for an enterprise chatbot. Evaluate the user input below and classify it into ONE OR MORE of the following policy categories.

POLICY CATEGORIES:
- SAFE (POL-000): No policy violation detected.
- PII_LEAK (POL-001): Input contains or requests personal identifiable information such as full names with contact details, SSNs, credit card numbers, home addresses, or medical records.
- FINANCIAL_ADVICE (POL-002): Input requests specific investment recommendations, stock picks, or personalized financial/legal advice beyond general information.
- HARASSMENT (POL-003): Input contains threatening, abusive, discriminatory, or targeted harassing language toward a person or group.

RULES:
- Evaluate the input independently against each category — more than one may apply.
- If no violation applies, classify as SAFE only.
- Do not over-flag: general discussion of a topic (e.g., "what is a stock?") is NOT a violation; only flag when the input crosses into the specific behaviors defined above.
- Be precise: base your classification only on what is explicitly present in the input, not assumptions about intent.

OUTPUT ONLY valid JSON in this schema:
{
  "flagged": boolean,
  "policy_ids": ["array of matched policy IDs, e.g. POL-001"],
  "categories": ["array of matched category names"],
  "reasoning": "string (1-2 sentences per flagged category)",
  "action": "ALLOW" | "BLOCK" | "REVIEW"
}

Action rules:
- ALLOW if flagged is false
- BLOCK if PII_LEAK or HARASSMENT is present
- REVIEW if only FINANCIAL_ADVICE is present (borderline, needs human judgment)

User input: "{user_input}"
```

**Why this works:** Defining each policy with concrete trigger criteria (not just a label) prevents both under- and over-flagging, and mapping categories to explicit policy IDs plus a determined action (ALLOW/BLOCK/REVIEW) gives the downstream system a directly actionable guardrail decision rather than just a soft classification.

---

## Q18 — PII Anonymization & Redaction Engine

**Question:**
Customer feedback tickets sent to third-party LLMs contain Personally Identifiable Information (PII) like email addresses, phone numbers, and full names. You need an LLM to rewrite the input with standardized anonymization tokens. Write a prompt that sanitizes input text by replacing sensitive data with specific placeholders while preserving exact syntactic structure.

**Technique Used:** PII Redaction

**Answer:**

```
You are a PII redaction engine. Your job is to rewrite the input text, replacing all personally identifiable information with standardized placeholder tokens, while preserving the exact sentence structure, grammar, and meaning of the original text.

PII CATEGORIES AND TOKENS:
- Full names → [NAME]
- Email addresses → [EMAIL]
- Phone numbers → [PHONE]
- Physical addresses → [ADDRESS]
- Credit card / bank account numbers → [FINANCIAL_ID]
- Government ID numbers (SSN, passport, Aadhaar, etc.) → [GOV_ID]
- Dates of birth → [DOB]

RULES:
1. Replace ONLY actual PII instances — do not redact generic terms, company names, or product names.
2. Preserve the exact sentence structure and surrounding words — only the PII value itself is replaced with its token, nothing else is altered.
3. If the same piece of PII appears multiple times, use the same token consistently (do not number them differently) unless multiple distinct people/values of the same type appear — in that case, number them: [NAME_1], [NAME_2], etc.
4. Do not summarize, shorten, or rephrase the text — only substitute PII values.
5. If uncertain whether something is PII (e.g., a common word that could be a name), err on the side of NOT redacting unless there's clear contextual evidence it's a real identifier.

OUTPUT FORMAT:
Return ONLY the redacted text — no explanation, no list of what was redacted, no extra commentary.

Input text: "{customer_feedback_text}"
```

**Why this works:** Anchoring each PII type to a specific standardized token (not a generic "[REDACTED]") preserves useful structural information for downstream analysis while numbering repeated distinct entities ([NAME_1] vs [NAME_2]) keeps multi-person tickets disambiguated — and the strict "preserve structure, only swap the value" rule prevents the model from accidentally rewriting or summarizing the ticket in the process.

---

## Q19 — Intent Multi-Label Taxonomy Classifier

**Question:**
Customer support queries often contain multiple overlapping requests (e.g., asking for a refund while also reporting a bug). A single-label classifier misses sub-intents. Draft a multi-label classification prompt that identifies primary and secondary intents along with urgency levels from customer messages.

**Technique Used:** Classification (Multi-label)

**Answer:**

```
You are a customer support intent classifier. Customer messages often contain more than one intent — identify ALL of them, not just the most obvious one.

INTENT TAXONOMY:
- REFUND_REQUEST — customer wants money back
- BUG_REPORT — customer reports a technical issue/defect
- BILLING_QUESTION — question about charges, invoices, subscriptions
- FEATURE_REQUEST — customer suggests new functionality
- ACCOUNT_ISSUE — login, access, or account settings problems
- GENERAL_INQUIRY — informational question, no action needed
- COMPLAINT — dissatisfaction expressed without a specific actionable request

INSTRUCTIONS:
1. Read the customer message fully before classifying.
2. Identify the PRIMARY intent — the main driving reason for the message.
3. Identify any SECONDARY intent(s) — additional distinct requests/issues mentioned, even briefly.
4. Assign an urgency level per intent based on language cues (words like "urgent," "immediately," financial impact, blocking issues = higher urgency).
5. Do not merge distinct intents into one just because they appear in the same sentence — if the customer both reports a bug and asks for a refund, these are two separate intents.

OUTPUT ONLY valid JSON in this schema:
{
  "primary_intent": {
    "label": "string (one of the taxonomy labels)",
    "urgency": "low" | "medium" | "high",
    "evidence": "string (quote or paraphrase the relevant part of the message)"
  },
  "secondary_intents": [
    {
      "label": "string",
      "urgency": "low" | "medium" | "high",
      "evidence": "string"
    }
  ]
}

Customer message: "{customer_message}"
```

**Why this works:** Explicitly separating primary vs. secondary intents (rather than one label) prevents the classifier from dropping legitimate sub-requests like a bug report buried inside a refund message, and requiring per-intent urgency plus evidence keeps each classification traceable and justified rather than a black-box label.

---

## Q20 — Factuality & Claim Breakdown Verification

**Question:**
An AI essay writer generates text that needs automated fact-checking. You must break the output down into individual atomic claims and evaluate each claim separately. Design a claim-extraction prompt that decomposes a paragraph into verifiable atomic statements and assigns verification status.

**Technique Used:** Factuality / Claim Verification

**Answer:**

```
You are a fact-checking assistant. You will be given a paragraph of AI-generated text and, optionally, reference source material. Break the paragraph into individual atomic claims and verify each one.

STEP 1 — CLAIM EXTRACTION:
Decompose the paragraph into atomic claims — each claim should express exactly ONE verifiable fact (a single assertion, not a compound sentence with multiple facts bundled together). Do not include opinions, vague statements, or subjective claims (e.g., "this is important") as atomic claims — only factual, checkable assertions.

STEP 2 — VERIFICATION:
For each atomic claim, verify it:
- If reference source material is provided, check the claim against it and cite the specific supporting or contradicting section.
- If no source material is provided, verify against your own knowledge, but be conservative — if you're not confident, mark it as UNVERIFIABLE rather than guessing.

VERIFICATION STATUSES:
- TRUE — claim is confirmed accurate
- FALSE — claim is confirmed inaccurate/contradicted
- UNVERIFIABLE — cannot be confirmed or denied with available information/knowledge

OUTPUT ONLY valid JSON in this schema:
{
  "claims": [
    {
      "claim_text": "string (the atomic claim, restated clearly)",
      "status": "TRUE" | "FALSE" | "UNVERIFIABLE",
      "justification": "string (why this status was assigned, with source reference if available)"
    }
  ],
  "overall_factuality_score": float (0.0 to 1.0, proportion of claims marked TRUE)
}

Reference source material (if any): "{source_material}"
Paragraph to fact-check: "{ai_generated_paragraph}"
```

**Why this works:** Breaking a paragraph into single-fact atomic claims (rather than checking the whole paragraph at once) prevents one true detail from masking an embedded false one, and forcing a conservative UNVERIFIABLE fallback — instead of guessing TRUE/FALSE without evidence — reduces the model's own risk of introducing new hallucinated "verifications" during the fact-checking process itself.