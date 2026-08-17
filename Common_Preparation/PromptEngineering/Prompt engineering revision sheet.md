# Prompt Engineering — Quick Revision Sheet

Covers your exam syllabus: Prompting Techniques, Multi-Model Prompting,
Log Analysis, Microservices Troubleshooting, Extraction + Normalization,
Error Code Mapping.

Unlike DSA/RAG, this section is less about algorithms and more about
**designing effective prompts for real operational engineering tasks.**

## 1. Pattern 1 — Prompting Techniques

### Zero-shot (no examples given)
```
Classify the sentiment of this review as positive, negative, or neutral:
"The product arrived broken and support never responded."
```

### Few-shot (examples included to guide format/behavior)
```
Classify the sentiment as positive, negative, or neutral.

Review: "Amazing quality, fast shipping!"
Sentiment: positive

Review: "Terrible experience, would not recommend."
Sentiment: negative

Review: "The product arrived broken and support never responded."
Sentiment:
```
**Key idea:** few-shot examples teach the model the exact output
FORMAT you want (not just the task) — critical when you need
consistent, parseable output.

### Chain-of-Thought (CoT) — ask the model to reason step by step
```
A store had 120 items. They sold 45% on Monday and 30 more on
Tuesday. How many items are left?

Let's think through this step by step.
```
**Key idea:** adding "let's think step by step" (or structuring the
prompt to request reasoning first) significantly improves accuracy on
multi-step problems — the model reasons through intermediate steps
instead of jumping straight to an answer.

### System prompts vs User prompts
```python
messages = [
    {"role": "system", "content": "You are a senior DevOps engineer. Always respond with structured JSON."},
    {"role": "user", "content": "Analyze this error log and identify the root cause."}
]
```
**Key idea:** the system prompt sets persistent behavior/persona/
constraints for the WHOLE conversation. The user prompt is the
specific request. Put stable rules (format, tone, role) in system;
put the actual task in user.

### Role-based prompting
```
You are a database performance expert with 15 years of experience
in distributed systems. Review this query execution plan and
identify bottlenecks.
```
**Key idea:** assigning a role/persona primes the model to draw on
relevant "knowledge patterns" and respond with appropriate depth,
vocabulary, and focus areas.

## 2. Pattern 2 — Multi-Model Prompting
Different LLMs (Claude, GPT, Gemini, open-source models) can respond
differently to the same prompt due to differences in training data,
instruction tuning, and context window handling.

**Practical considerations:**
- **Formatting sensitivity** — some models respond better to XML-style
  tags (`<context>...</context>`), others to Markdown headers, others
  to plain numbered instructions
- **Verbosity defaults** — some models are naturally more verbose;
  you may need explicit "be concise" instructions for some models but
  not others
- **System prompt support** — not all APIs support a dedicated system
  role the same way; some require folding instructions into the first
  user message
- **Context window limits** — a prompt with lots of retrieved context
  (RAG) may need truncation differently depending on the model's
  context limit

**Practical pattern — model-agnostic prompt design:**
```python
def build_prompt(task, context, model_family="generic"):
    if model_family == "claude":
        return f"<context>\n{context}\n</context>\n\nTask: {task}"
    elif model_family == "gpt":
        return f"Context:\n{context}\n\nTask: {task}"
    else:
        return f"{context}\n\n{task}"
```
**Key idea:** abstracting prompt construction into a function (rather
than hardcoding one prompt string) lets you adapt formatting per
model without duplicating logic — this is the kind of "module
separation" thinking that shows up across your whole syllabus.

## 3. Pattern 3 — Log Analysis
Use prompts (often combined with structured parsing) to extract
insights from raw, unstructured log data.

```python
import re
import json

log_line = "2026-08-17 10:23:45 ERROR [UserService] Failed to connect to database: timeout after 30s"

pattern = r"(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) (\w+) \[(\w+)\] (.+)"
match = re.match(pattern, log_line)

if match:
    timestamp, level, service, message = match.groups()
    parsed = {
        "timestamp": timestamp,
        "level": level,
        "service": service,
        "message": message,
    }
    print(json.dumps(parsed, indent=2))
```
Output:
```json
{
  "timestamp": "2026-08-17 10:23:45",
  "level": "ERROR",
  "service": "UserService",
  "message": "Failed to connect to database: timeout after 30s"
}
```

**Sample prompt for LLM-based log analysis:**
```
You are analyzing application logs. Given the log entries below,
identify:
1. Any recurring error patterns
2. The most likely root cause
3. Suggested next debugging step

Logs:
{log_entries}
```
**Key idea:** regex/parsing extracts STRUCTURE from logs (fast,
deterministic); the LLM prompt adds REASONING on top (pattern
recognition, root-cause hypotheses) — often you combine both: parse
first, then feed the structured summary to the LLM for analysis.

## 4. Pattern 4 — Microservices Troubleshooting
Prompting an LLM to help reason through distributed systems issues,
usually by feeding it error traces, logs, and service topology.

**Sample prompt structure:**
```
You are debugging a microservices architecture. Here is the context:

Services involved: OrderService -> PaymentService -> InventoryService
Error trace:
{stack_trace}

Recent deployment: PaymentService was deployed 10 minutes before the
errors started.

Question: What is the most likely root cause, and what should be
checked first?
```
**Key idea:** the more relevant CONTEXT you provide (service
dependencies, timing, recent changes), the better the LLM's reasoning
— this mirrors real debugging: correlating symptoms with recent
changes and system topology, not just reading one log line in
isolation.

## 5. Pattern 5 — Extraction + Normalization
Extract structured fields from unstructured text, then normalize
them into a consistent format.

```python
import re

raw_text = "Order #4521 placed on 08/17/2026 for $1,250.00"

amount_match = re.search(r"\$([\d,]+\.\d{2})", raw_text)
date_match = re.search(r"(\d{2})/(\d{2})/(\d{4})", raw_text)
order_match = re.search(r"#(\d+)", raw_text)

normalized = {
    "order_id": int(order_match.group(1)),
    "amount": float(amount_match.group(1).replace(",", "")),
    "date": f"{date_match.group(3)}-{date_match.group(1)}-{date_match.group(2)}",   # normalize to YYYY-MM-DD
}
print(normalized)
# {'order_id': 4521, 'amount': 1250.0, 'date': '2026-08-17'}
```

**Sample prompt for LLM-based extraction:**
```
Extract the following fields from the text as JSON:
- order_id (integer)
- amount (float, no currency symbol)
- date (format: YYYY-MM-DD)

Text: "Order #4521 placed on 08/17/2026 for $1,250.00"

Respond with ONLY valid JSON, no explanation.
```
**Key idea:** normalization means converting varied input formats
(MM/DD/YYYY, "$1,250.00", "#4521") into ONE consistent output
schema — this is essential when the extracted data feeds into a
database or downstream system that expects a fixed format.

## 6. Pattern 6 — Error Code Mapping
Translate error codes into human-readable explanations, or route/
classify them by category.

```python
error_map = {
    "E001": "Database connection timeout",
    "E002": "Invalid authentication token",
    "E003": "Rate limit exceeded",
}

def map_error(code):
    return error_map.get(code, "Unknown error code")

print(map_error("E002"))   # Invalid authentication token
print(map_error("E999"))     # Unknown error code
```

**Sample prompt for LLM-based error classification:**
```
Given this error code and message, classify it into one of these
categories: Authentication, Network, RateLimit, Database, Unknown.

Error Code: E002
Message: "Token validation failed: signature mismatch"

Category:
```
**Key idea:** a hardcoded dict works for known codes (fast,
deterministic). An LLM-based approach is more useful for NEW or
unfamiliar error codes/messages where you need semantic
understanding rather than exact lookup — often systems combine both:
dict lookup first, LLM fallback for unmapped codes.

## 7. General Prompt Engineering Best Practices
- **Be specific about output format** — "Respond with JSON only" beats
  "give me the data" if you need to parse the response programmatically
- **Provide examples for format-sensitive tasks** — few-shot beats
  zero-shot whenever exact output structure matters
- **Break complex tasks into steps** — CoT prompting or splitting into
  multiple prompts often outperforms one giant prompt
- **Put constraints in the system prompt** — keeps them consistent
  across a whole conversation rather than repeating them every turn
- **Give context, not just instructions** — for troubleshooting/log
  analysis tasks, more relevant context (timing, dependencies, recent
  changes) improves reasoning quality significantly

## Priority Checklist for the Exam
- [ ] Know the difference between zero-shot, few-shot, and CoT prompting
- [ ] Understand system vs user prompt roles
- [ ] Can write a prompt requesting structured JSON output
- [ ] Comfortable combining regex parsing + LLM reasoning for logs
- [ ] Can design a prompt with rich context for troubleshooting scenarios
- [ ] Understand extraction + normalization as two distinct steps (pull data out, then standardize format)
- [ ] Know when a simple dict lookup suffices vs when LLM classification adds value (error mapping)