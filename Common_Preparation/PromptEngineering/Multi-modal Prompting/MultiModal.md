# Multimodal Prompting — Revision Sheet

## What it is (simple terms)

Multimodal prompting is when you give an AI model more than just text — like images, audio, video, or PDFs — combined with a text instruction, so it can understand, analyze, or extract information from non-text content. Instead of describing an image in words, you show it to the model directly.

---

## Core Sub-Techniques

### 1. Image + Text Instruction

**What it is:** Uploading an image alongside a text question or task, asking the model to reason about the visual content.

**How to frame it:**
- Be specific about what to look at in the image (a region, an object, text within it)
- Specify the output format you want (description, list, structured data)
- If the image is low quality/ambiguous, tell the model how to handle uncertainty

**Real-time examples:**
- Uploading a photo of a fridge and asking: *"What meals can I make with these ingredients?"*
- Uploading a chart image and asking: *"Summarize the trend shown in this graph."*
- Uploading a whiteboard photo from a meeting and asking: *"Convert this into a structured action-item list."*

---

### 2. Document/PDF Understanding

**What it is:** Feeding scanned documents, PDFs, or screenshots and asking the model to extract, summarize, or answer questions based on their content — including layout-aware understanding (tables, headers, forms).

**How to frame it:**
- Specify the exact fields/sections you want extracted
- Mention if the document has tables, forms, or multi-column layout so the model reads it correctly
- Ask for structured output (JSON/CSV) if the result needs to be machine-usable

**Real-time examples:**
- *"Extract the total amount, due date, and vendor name from this invoice PDF."*
- *"This is a scanned lease agreement — summarize the key terms: rent, deposit, notice period."*
- *"Read this screenshot of a spreadsheet and convert the visible data into a table."*

---

### 3. OCR + Reasoning (Handwriting, Skewed/Low-Quality Images)

**What it is:** Extracting text from images where the text itself is hard to read — handwritten notes, blurry photos, skewed scans — and reasoning about it despite imperfect input.

**How to frame it:**
- Explicitly tell the model how to handle unreadable sections (e.g., "mark as UNREADABLE" rather than guessing)
- Ask it to flag low-confidence extractions separately from high-confidence ones
- For handwriting, mention it's handwritten so the model applies the right reading strategy

**Real-time examples:**
- *"Transcribe this handwritten doctor's prescription. Mark any illegible words as [UNCLEAR]."*
- *"This receipt photo is angled and blurry — extract what you can and flag uncertain fields."*
- *"Read this handwritten recipe card and convert it into a structured ingredient list."*

---

### 4. Visual Question Answering (VQA)

**What it is:** Asking specific, pointed questions about an image rather than requesting a general description — the model needs to reason about specific visual details.

**How to frame it:**
- Ask precise, narrow questions rather than vague ones ("What color is the car in the background?" vs. "Describe this image")
- For counting/spatial questions, be aware models can make mistakes with small or overlapping objects — ask for a confidence level if accuracy matters
- Chain multiple questions if you need a full breakdown

**Real-time examples:**
- *"How many people are wearing helmets in this construction site photo?"*
- *"Is the traffic light in this image red, yellow, or green?"*
- *"Does this product packaging show a expiration date? If so, what is it?"*

---

### 5. Image Comparison / Diffing

**What it is:** Giving the model two or more images and asking it to compare them — spotting differences, changes, or inconsistencies.

**How to frame it:**
- Clearly label which image is "before" and which is "after"
- Specify what kind of differences matter (visual, textual, structural, positional)
- Ask for a structured list of differences rather than a paragraph, if precision matters

**Real-time examples:**
- *"Compare these two screenshots of the app UI — what changed between version 1 and version 2?"*
- *"Here are two photos of the same room, before and after the renovation. List the changes."*
- *"Compare these two product label images — are there any discrepancies in the ingredients listed?"*

---

### 6. Multimodal Chart/Data Reading

**What it is:** Asking the model to interpret charts, graphs, diagrams, or infographics — going beyond OCR into understanding what the visual data represents.

**How to frame it:**
- Ask for the underlying trend/insight, not just raw numbers, if that's what you need
- If you need exact data points, ask it to extract them into a table (and flag if axis values are unclear)
- Mention the chart type if known (bar, line, pie) — helps the model apply the right reading approach

**Real-time examples:**
- *"This is a line chart of monthly revenue — describe the overall trend and any notable spikes or drops."*
- *"Extract the approximate values from this bar chart into a table with two columns: category and value."*
- *"This pie chart shows market share — which company has the largest share, and roughly what percentage?"*

---

### 7. Audio/Video Understanding (where supported)

**What it is:** Providing audio clips or video content (or transcripts/frames from them) and asking the model to summarize, transcribe, or analyze the content.

**How to frame it:**
- Specify if you want a transcript, summary, or specific extracted details (speaker names, key moments, timestamps)
- For video, note that many models process frames/transcripts rather than true continuous video — ask for what's realistically extractable
- Ask for timestamps if you need to locate specific moments

**Real-time examples:**
- *"Transcribe this voice memo and summarize the key action items mentioned."*
- *"Given this video's transcript, identify the 3 main topics discussed and roughly when each starts."*
- *"Summarize the tone and sentiment of this customer call recording."*

---

## Quick Reference: Framing Checklist for Multimodal Prompts

| Element | Why it matters |
|---|---|
| Be specific about what to extract/analyze | Avoids vague, generic descriptions |
| Specify output format (JSON, table, list, prose) | Makes results usable downstream |
| Define how to handle unclear/missing content | Prevents hallucinated guesses |
| Mention content type context (handwritten, chart, scanned) | Helps model apply the right reading strategy |
| Ask for confidence levels on uncertain extractions | Useful when accuracy matters (e.g., invoices, forms) |

---

## One-line Summary

Multimodal prompting = combining non-text input (image/audio/video/PDF) with clear text instructions, explicit output format, and rules for handling uncertainty — so the model reasons over visual/audio content as reliably as it does over plain text.