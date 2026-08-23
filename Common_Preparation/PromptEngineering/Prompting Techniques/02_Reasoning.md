# Reasoning Prompting Techniques — Revision Sheet

## 6. Chain-of-Thought (CoT)

**What it is (simple terms):**
Instead of asking the AI to jump straight to an answer, you ask it to "think step by step" — breaking the problem into smaller reasoning steps before giving the final result. This improves accuracy on tasks that need logic or math.

**How to frame it:**
- Add phrases like "Let's think step by step" or "Explain your reasoning before answering"
- For controlled output, ask it to show reasoning first, then clearly separate the final answer (e.g., "Final Answer: ___")
- Useful for math, logic puzzles, multi-step decisions, or anything with intermediate steps
- If you only want the answer (not the reasoning shown), you can still add CoT internally and ask it to "think step by step but only output the final answer"

**Real-time examples:**
- *"A store had 120 apples. They sold 45 in the morning and 30 in the afternoon. How many are left? Let's think step by step."*
- *"Should I invest in Stock A or Stock B? Walk through the pros and cons of each step by step before giving a recommendation."*
- Debugging code: *"Here's an error message and code snippet. Reason through what's causing the bug step by step, then give the fix."*

---

## 7. Tree-of-Thoughts (ToT)

**What it is (simple terms):**
An extension of CoT — instead of following just *one* line of reasoning, the AI explores *multiple* possible reasoning paths (like branches of a tree), evaluates them, and picks the best one.

**How to frame it:**
- Ask the model to generate multiple different approaches/solutions first
- Then ask it to evaluate each branch (pros/cons, feasibility, correctness)
- Finally, ask it to select and justify the best path
- Useful for complex problems with multiple valid strategies (planning, puzzles, creative problem-solving)

**Real-time examples:**
- *"Suggest 3 different strategies to reduce customer churn. Evaluate each on cost and impact, then recommend the best one."*
- Solving a puzzle: *"Generate 3 possible next moves in this chess position, evaluate each, and pick the strongest."*
- Business planning: *"Propose 3 different marketing approaches for launching this product, weigh their trade-offs, and choose the most effective one."*

---

## 8. Self-Consistency

**What it is (simple terms):**
Instead of trusting a single reasoning path, you get the AI to solve the same problem multiple times (often with slightly different reasoning), then pick the answer that shows up most often — or the strongest one — as the final answer. This reduces the chance of a one-off mistake.

**How to frame it:**
- Ask the model to generate multiple independent reasoning attempts for the same question
- Compare the answers across attempts
- Select the majority answer (most common one) or the most logically sound one
- Useful when accuracy matters more than speed — especially for math, logic, or factual reasoning tasks

**Real-time examples:**
- *"Solve this math problem 3 different ways, and tell me which answer appears most consistently."*
- *"Answer this trivia question using 3 independent reasoning attempts, then give me the most common answer."*
- Automated QA testing: running the same reasoning prompt multiple times to check if the AI consistently arrives at the same conclusion, flagging it if answers vary widely.

---

## 9. Self-Correction / Refinement

**What it is (simple terms):**
The AI doesn't just give one answer and stop — it generates a first draft, reviews its own work critically, finds mistakes or weaknesses, and then produces an improved final version.

**How to frame it:**
- Step 1: Ask for an initial answer/draft
- Step 2: Ask the model to review/critique its own output (look for errors, gaps, or improvements)
- Step 3: Ask it to produce a corrected/refined final version based on that critique
- Can be done in one prompt ("Generate an answer, then review it for mistakes, then give a corrected final answer") or across multiple turns

**Real-time examples:**
- *"Write a Python function to reverse a string. Then review your code for bugs or edge cases, and provide a corrected final version."*
- Essay writing: *"Draft a paragraph on climate change. Then critique it for weak arguments or unclear points, and rewrite an improved version."*
- *"Solve this math problem. Then double-check your work step by step, and correct any errors before giving the final answer."*