"""
generation.py — Prompt Building + Answer Generation

Responsible for: combining retrieved chunks with the user's question
into a well-formed prompt, then sending it to an LLM.

Uses a mock LLM call by default (so this runs without an API key),
with a clearly marked spot to plug in a real API (e.g. Anthropic's
Claude, or any other LLM provider) for the actual exam/production use.
"""


def build_prompt(query, retrieved_chunks):
    """Combine retrieved context with the user's question into a prompt."""
    context = "\n\n".join(f"- {chunk}" for chunk in retrieved_chunks)

    prompt = f"""Answer the question using ONLY the context below. \
If the context doesn't contain the answer, say so honestly.

Context:
{context}

Question: {query}

Answer:"""
    return prompt


def mock_llm_call(prompt):
    """
    Placeholder for a real LLM API call. Replace this with an actual
    request, e.g.:

        import anthropic
        client = anthropic.Anthropic(api_key="...")
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=500,
            messages=[{"role": "user", "content": prompt}]
        )
        return response.content[0].text

    For this demo, we just show that the prompt was built correctly.
    """
    return f"[MOCK LLM RESPONSE]\nThe model would answer here, grounded " \
           f"in the {prompt.count('- ')} retrieved context chunk(s) above."


def generate_answer(query, retrieved_chunks):
    prompt = build_prompt(query, retrieved_chunks)
    answer = mock_llm_call(prompt)
    return prompt, answer


if __name__ == "__main__":
    query = "What does RAG stand for?"
    chunks = [
        "RAG stands for Retrieval-Augmented Generation.",
        "It combines retrieval systems with language models.",
    ]
    prompt, answer = generate_answer(query, chunks)
    print("--- PROMPT ---")
    print(prompt)
    print("\n--- ANSWER ---")
    print(answer)