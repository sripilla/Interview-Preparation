# Structured Output Techniques — Revision Sheet

## 12. JSON Schema / Structured Output

**What it is (simple terms):**
You ask the AI to return its response in a strict, machine-readable format (usually JSON) instead of plain text — so your code can directly parse and use the output without manual cleanup.

**How to frame it:**
- Define the exact schema/fields you want (field names, data types, nesting)
- Explicitly say "Respond ONLY in valid JSON — no extra text, no explanations, no markdown fences"
- Give an example of the expected JSON structure if possible
- Specify what to do for missing values (e.g., "use null" instead of leaving fields out)
- If using an API, prefer built-in structured output / JSON mode features when available, as a backup to prompting

**Real-time examples:**
- *"Extract the name, email, and phone number from this text and return as JSON: {\"name\": \"\", \"email\": \"\", \"phone\": \"\"}"*
- Product catalog generation: *"Return product details as JSON with fields: title, price, category, in_stock (boolean)."*
- Building a chatbot backend where the AI's response needs to be parsed directly into a database record.

---

## 13. XML / Delimiters

**What it is (simple terms):**
You use clear markers (XML tags, triple quotes, dashes, etc.) to separate different parts of your prompt — like instructions, input data, and expected output — so the model doesn't confuse one part for another.

**How to frame it:**
- Wrap instructions, context, and data in distinct tags or delimiters (e.g., `<instructions>`, `<data>`, `<output_format>`, or `"""..."""`)
- Keep the same delimiter style consistent throughout the prompt
- Especially useful when the input data itself contains text that could be mistaken for instructions
- Reference the delimited sections explicitly in your instructions ("Using the text inside `<data>`, do X")

**Real-time examples:**
- ```
  <instructions>Summarize the following article in 2 sentences.</instructions>
  <data>The article text goes here...</data>
  ```
- *"Here is the customer complaint: \"\"\"I never received my order and support hasn't responded.\"\"\" — Classify the sentiment."*
- Prompt injection prevention: wrapping untrusted user input inside `<user_input>` tags so the model knows it's data, not commands to follow.

---

## 14. Classification

**What it is (simple terms):**
You ask the AI to sort a given input into one (or more) predefined categories — like tagging, labeling, or routing content based on fixed options you provide.

**How to frame it:**
- Clearly list all valid categories upfront (don't leave it open-ended)
- Specify if it's single-label ("pick one") or multi-label ("pick all that apply")
- Handle ambiguous/edge cases by giving guidance or examples (few-shot pairs well)
- Ask for output in a consistent format (e.g., just the label, or label + confidence score)

**Real-time examples:**
- Content moderation: *"Classify this comment as Safe, Toxic, or Spam."*
- Support ticket routing: *"Classify this ticket into one of: Billing, Technical, General Inquiry."*
- Multi-label tagging: *"Tag this news article with all relevant categories from: Politics, Sports, Technology, Health."*

---

## 15. Extraction

**What it is (simple terms):**
You ask the AI to pull out specific pieces of information from messy, unstructured text (or images/documents) and organize them into a clean, structured format.

**How to frame it:**
- Specify exactly what fields/entities to extract (names, dates, amounts, addresses, etc.)
- Define the output format (JSON, table, list) so it's directly usable
- Instruct on how to handle missing information (e.g., "leave blank" or "null" instead of guessing)
- For multimodal input (images, PDFs, scanned docs), clarify what type of document it is for better accuracy
- Say "extract only what's explicitly stated — do not infer or assume" to reduce hallucination

**Real-time examples:**
- *"Extract the invoice number, date, and total amount from this receipt text."*
- Resume parsing: *"Extract candidate name, skills, years of experience, and education from this resume into JSON."*
- Extracting structured data from a scanned ID card image: name, ID number, date of birth, expiry date.
- Pulling key terms (parties, dates, payment amount) from a legal contract PDF into a structured summary table.