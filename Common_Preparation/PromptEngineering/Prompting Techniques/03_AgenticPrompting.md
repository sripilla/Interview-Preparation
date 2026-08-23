# Agentic Prompting Techniques — Revision Sheet

## 10. ReAct (Reason + Act)

**What it is (simple terms):**
A pattern where the AI alternates between *thinking* (reasoning about what to do next) and *acting* (taking an action like searching, calculating, or calling a tool), then *observing* the result of that action before deciding the next step. It repeats this loop until it reaches a final answer — similar to how a human solves a problem by trying something, checking the outcome, and adjusting.

**How to frame it:**
- Structure the prompt to explicitly loop: **Thought → Action → Observation → repeat**
- Ask the model to state its reasoning before every action ("Thought: I need to find X, so I will...")
- Define what actions/tools are available (search, calculator, database lookup, API, etc.)
- Ask it to keep looping until it has enough information, then give a "Final Answer"
- Useful for tasks needing external info, multi-step problem solving, or tool use

**Real-time examples:**
- A research agent: *"Thought: I need the current stock price. Action: Search 'AAPL stock price'. Observation: $220. Thought: Now I can calculate the portfolio value..."*
- Customer support bot: *"Thought: I need to check the order status. Action: Call order_lookup API with order ID. Observation: Order shipped. Thought: I can now inform the user."*
- Travel planning assistant: reasoning about which city to search flights for, calling a flight-search tool, observing prices, then reasoning about the next step (checking hotel availability).

---

## 11. Tool / Function Calling

**What it is (simple terms):**
You give the AI access to a set of tools or functions (like a calculator, weather API, database query, or search engine) and it decides — based on the user's request — *which* tool to use and *what inputs* to pass to it, instead of trying to answer everything from its own knowledge.

**How to frame it:**
- Clearly define the available tools/functions, including their names, purpose, and required parameters
- Instruct the model to decide *if* a tool is needed and *which one* fits the request
- Specify the expected output format for the tool call (e.g., JSON with function name + arguments)
- Handle cases where no tool is needed — the model should still be able to answer directly when appropriate
- Useful for real-time data, calculations, external actions (booking, sending emails), or anything outside the model's built-in knowledge

**Real-time examples:**
- *"What's the weather in Bengaluru today?"* → model decides to call a `get_weather(location)` function instead of guessing
- *"Convert 100 USD to INR"* → model calls a `currency_converter(amount, from, to)` function rather than relying on outdated exchange rate knowledge
- *"Book a table for 2 at 7 PM"* → model calls a `reserve_table(time, guests)` function
- E-commerce assistant: *"Track my order #12345"* → model recognizes it needs the `order_tracking(order_id)` tool rather than answering from memory