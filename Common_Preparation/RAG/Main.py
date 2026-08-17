"""
main.py — Full RAG Pipeline Orchestration

Ties together: ingestion -> embedding -> vector store -> retrieval ->
generation. This is the "module separation" pattern from the
syllabus — each concern lives in its own file/class, and main.py just
wires them together.
"""

from ingestion import preprocess_text, chunk_text
from embedding import Embedder
from vector_store import InMemoryVectorStore
from generation import generate_answer


def run_rag_pipeline(document_text, query, chunk_size=150, overlap=20, top_k=3):
    # 1. Preprocess + chunk the document
    cleaned_text = preprocess_text(document_text)
    chunks = chunk_text(cleaned_text, chunk_size=chunk_size, overlap=overlap)
    print(f"[1/5] Document split into {len(chunks)} chunks")

    # 2. Embed all chunks
    embedder = Embedder()
    chunk_vectors = embedder.embed(chunks)
    print(f"[2/5] Embedded {len(chunk_vectors)} chunks using backend={embedder.backend}")

    # 3. Store embeddings in an in-memory vector store
    store = InMemoryVectorStore()
    store.add_batch(chunks, chunk_vectors)
    print(f"[3/5] Vector store now holds {len(store)} entries")

    # 4. Embed the query and retrieve the most relevant chunks
    query_vector = embedder.embed([query])[0]
    top_results = store.search(query_vector, top_k=top_k)
    retrieved_chunks = [text for score, text in top_results]
    print(f"[4/5] Retrieved top {len(retrieved_chunks)} chunks for the query")

    # 5. Build the prompt and generate an answer
    prompt, answer = generate_answer(query, retrieved_chunks)
    print(f"[5/5] Generated answer\n")

    return {
        "chunks": chunks,
        "retrieved": top_results,
        "prompt": prompt,
        "answer": answer,
    }


if __name__ == "__main__":
    document = """
    Retrieval-Augmented Generation (RAG) is a technique that combines
    a retrieval system with a language model. Instead of relying only
    on knowledge memorized during training, RAG fetches relevant
    documents at query time and includes them in the prompt sent to
    the model. This allows the model to answer using current,
    specific, or private information it was never trained on.

    A typical RAG pipeline has several stages. First, documents are
    ingested and split into smaller chunks, since embedding models
    and LLMs have limited context windows. Each chunk is then
    converted into a numerical vector using an embedding model, such
    as FastEmbed. These vectors are stored in a vector index, which
    can be a simple in-memory list for small-scale use cases or an
    external vector database for large-scale production systems.

    When a user asks a question, the question itself is embedded
    using the same embedding model. The system then searches the
    vector index for the chunks most similar to the query vector,
    typically using cosine similarity. The top matching chunks are
    retrieved and inserted into a prompt template along with the
    original question, and this combined prompt is sent to the
    language model to generate a grounded, context-aware answer.
    """

    query = "What embedding model does the syllabus mention?"

    result = run_rag_pipeline(document, query, chunk_size=150, overlap=20, top_k=2)

    print("=" * 60)
    print("RETRIEVED CHUNKS (with similarity scores):")
    print("=" * 60)
    for score, text in result["retrieved"]:
        print(f"\n[{score:.4f}] {text}")

    print("\n" + "=" * 60)
    print("FINAL ANSWER:")
    print("=" * 60)
    print(result["answer"])