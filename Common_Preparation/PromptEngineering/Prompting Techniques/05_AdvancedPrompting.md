# Advanced Prompting Design Techniques — Revision Sheet

## 16. Context Compression

**What it is (simple terms):**
When your prompt/context gets too long (hitting token limits or slowing things down), you shrink it down — summarizing, removing redundancy, or keeping only the most relevant parts — while still preserving the key information the model needs.

**How to frame it:**
- Summarize long documents/conversation history into concise bullet points before feeding them back in
- Remove repetitive or irrelevant details, keep only facts that affect the outcome
- Use hierarchical summarization for very long content (summarize chunks, then summarize the summaries)
- Explicitly ask the model: "Compress this into the shortest version that keeps all critical facts intact"
- For multi-turn chats, periodically summarize older turns instead of sending the full history every time

**Real-time examples:**
- Summarizing a 50-page report into a 200-word brief before using it as context for further Q&A
- Chatbot memory: condensing a long conversation history into "User is a vegetarian, prefers budget travel, based in Bengaluru" instead of replaying every message
- Compressing customer support ticket threads into a short case summary before escalating to a human agent
- Reducing a large codebase's context into just the relevant function signatures and docstrings before asking the AI to debug one function

---

## 17. Meta-Prompting

**What it is (simple terms):**
Instead of writing the final prompt yourself, you ask the AI to help you *design, critique, or improve* a prompt — essentially using the LLM as a prompt-engineering assistant.

**How to frame it:**
- Give the model your current prompt/goal and ask it to identify weaknesses or ambiguities
- Ask it to rewrite/optimize the prompt for clarity, specificity, or better output quality
- Specify what you're optimizing for (accuracy, conciseness, following a format, avoiding a certain issue)
- Can be iterative: generate a prompt → test it → ask the model to refine it further based on results

**Real-time examples:**
- *"Here's my prompt for a customer support bot: [prompt]. Rewrite it to reduce ambiguity and make responses more concise."*
- *"I want a prompt that makes an AI extract dates from text reliably. Write and refine that prompt for me."*
- Prompt A/B testing: asking the model to generate 3 variations of a prompt, then evaluating which produces the most consistent output
- *"This prompt keeps producing overly long answers. Modify it to enforce shorter, more direct responses."*

---

## 18. Stateful / Multi-turn Prompting

**What it is (simple terms):**
Since the AI doesn't naturally "remember" things between requests, you manually track and pass along the relevant state (user info, previous decisions, conversation history) with each new message, so the conversation feels continuous and consistent.

**How to frame it:**
- Maintain a structured "state" object (e.g., JSON) containing key facts learned so far
- Pass the updated state along with each new user message
- Ask the model to both use the state AND return an updated version of it after each turn
- Clearly separate "current state," "conversation history," and "new user input" in the prompt (often via delimiters — ties back to XML/Delimiters technique)
- Useful for games, multi-step forms, ongoing tasks, or any app needing memory across turns

**Real-time examples:**
- A trip-planning assistant that remembers: destination, budget, dates, and preferences across multiple messages, updating them as the user adds more details
- Game state tracking: player health, inventory, and location updated after every action, and passed back into the next prompt
- Multi-step form filling: bot asks for name → email → address one at a time, keeping a running record of what's been collected
- Customer support: passing along ticket ID, issue summary, and previous troubleshooting steps in each follow-up message

---

## 19. Multimodal Prompting

**What it is (simple terms):**
You give the AI more than just text — like images, PDFs, or scanned documents — combined with text instructions, so it can understand and extract information from visual or mixed content.

**How to frame it:**
- Clearly state what you want extracted or analyzed from the image/document alongside the text instruction
- Specify the output format you want (JSON, description, list, table)
- If the image contains specific elements (charts, handwriting, ID cards, receipts), mention that context to guide accurate reading
- Combine with extraction techniques for structured results (e.g., "extract fields from this scanned form as JSON")
- Be clear about what to do if the model can't read part of the image (e.g., "mark as unclear" rather than guessing)

**Real-time examples:**
- Uploading a receipt image and asking: *"Extract the merchant name, date, and total amount as JSON."*
- Uploading a chart/graph image and asking: *"Describe the trend shown in this graph in 2 sentences."*
- Scanned ID verification: *"Extract name, date of birth, and ID number from this ID card image."*
- Combining a product photo with text: *"Based on this image and the description below, write a product listing."*