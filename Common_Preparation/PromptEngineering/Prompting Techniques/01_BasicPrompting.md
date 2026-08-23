# Basic Prompting Techniques — Revision Sheet

## 1. Zero-shot Prompting

**What it is (simple terms):**
You ask the AI to do a task straight away — no examples, no hand-holding. You just describe what you want, and it figures out how based on its training.

**How to frame it:**
- Clearly state the task/role ("Classify this text as...")
- Define the exact output categories or format you expect
- Be specific about edge cases in the instructions themselves (since you can't show examples)
- Keep instructions unambiguous — no room for the model to "guess" your intent

**Real-time examples:**
- Asking ChatGPT: *"Classify this customer review as Positive, Negative, or Neutral: 'The delivery was late but the product quality was great.'"* — no examples given, model uses its own understanding.
- Content moderation: *"Flag this comment as Safe, Toxic, or Spam."*
- Translating a sentence to French without giving any sample translations first.

---

## 2. Few-shot Prompting

**What it is (simple terms):**
Instead of just describing the task, you *show* the AI a few examples of input → output pairs. This helps it understand your exact expectations, especially for tricky or ambiguous cases.

**How to frame it:**
- Give 2–5 examples covering different scenarios (including tricky/edge ones)
- Keep the format of examples consistent (same structure every time)
- End with the actual query you want answered, in the same format
- Prioritize examples that resemble your hardest/most ambiguous real cases

**Real-time examples:**
- Sentiment analysis: showing 3 examples of reviews labeled Positive/Negative/Neutral, then asking it to label a new, ambiguous review like *"It's okay I guess, does the job."*
- Email classification: giving examples of "Spam" vs "Not Spam" emails before asking it to classify a new one that has mixed signals (e.g., a legit newsletter with promotional language).
- Teaching a chatbot to respond in a specific tone by showing 3 sample Q&A pairs first.

---

## 3. Role Prompting

**What it is (simple terms):**
You tell the AI to "act as" someone — a doctor, lawyer, teacher, senior developer — so it responds with the tone, vocabulary, and depth that persona would use.

**How to frame it:**
- Assign a specific role/persona ("You are a senior data scientist with 10 years of experience...")
- Add context about the audience or purpose ("...explaining to a beginner")
- Optionally specify tone (formal, casual, technical)
- Combine with constraints for even more control (e.g., "Act as a lawyer and keep responses under 100 words")

**Real-time examples:**
- *"Act as a cardiologist and explain what high blood pressure does to the heart, in simple terms for a patient."*
- *"You are a senior software engineer reviewing a junior's code. Point out bugs and suggest improvements."*
- *"Act as a career coach and review my resume for a marketing role."*

---

## 4. Instruction + Constraints

**What it is (simple terms):**
You don't just ask for something — you also tell the AI exactly *how* to do it: format, length, style, structure, what to include/exclude.

**How to frame it:**
- State the task first, then list constraints as bullet points or numbered rules
- Be explicit about format (JSON, table, bullet list, word count, etc.)
- Specify boundaries (e.g., "only use information from the given text," "max 3 sentences")
- Use strong directive language: "must," "only," "exactly," "do not exceed"

**Real-time examples:**
- *"Summarize this article in exactly 3 bullet points, each under 15 words."*
- *"Generate a product description in JSON format with fields: name, price, description. Do not add extra fields."*
- *"Write a formal email requesting a meeting. Keep it under 100 words and do not use exclamation marks."*

---

## 5. Negative Prompting

**What it is (simple terms):**
You explicitly tell the AI what to *avoid* — certain words, tones, topics, or formats — so it doesn't accidentally produce something unwanted.

**How to frame it:**
- Pair it with a positive instruction (don't just say what to avoid — say what to do instead)
- Be specific about what's off-limits (words, phrases, style, content type)
- Use it to prevent hallucination too (e.g., "Do not invent facts not present in the source text")
- Place negative constraints clearly, ideally as a separate rule/line

**Real-time examples:**
- *"Write a product review. Do not use the words 'amazing' or 'incredible' — keep it factual and specific."*
- *"Summarize this legal document. Do not include any personal opinions or legal advice."*
- Image/content generation: *"Describe the image but do not mention any brand names or logos."*
- Chatbot safety: *"Answer the question but do not provide medical dosage recommendations."*




