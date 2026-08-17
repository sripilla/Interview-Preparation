"""
ingestion.py — Document Ingestion + Preprocessing

Responsible for: loading raw documents and splitting them into
overlapping chunks ready for embedding.
"""

import re


def load_document(filepath):
    """Load raw text from a file."""
    with open(filepath, "r", encoding="utf-8") as f:
        return f.read()


def preprocess_text(text):
    """Basic cleaning: collapse whitespace, strip leading/trailing space."""
    text = re.sub(r"\s+", " ", text)   # collapse multiple spaces/newlines into one
    return text.strip()


def chunk_text(text, chunk_size=200, overlap=30):
    """
    Split text into overlapping chunks.

    chunk_size: max characters per chunk
    overlap: characters shared between consecutive chunks (prevents
             losing context right at a chunk boundary)
    """
    if chunk_size <= overlap:
        raise ValueError("chunk_size must be greater than overlap")

    chunks = []
    start = 0
    text_length = len(text)

    while start < text_length:
        end = start + chunk_size
        chunk = text[start:end].strip()
        if chunk:
            chunks.append(chunk)
        start += chunk_size - overlap

    return chunks


def ingest_document(filepath, chunk_size=200, overlap=30):
    """Full ingestion pipeline: load -> preprocess -> chunk."""
    raw_text = load_document(filepath)
    cleaned_text = preprocess_text(raw_text)
    chunks = chunk_text(cleaned_text, chunk_size=chunk_size, overlap=overlap)
    return chunks


if __name__ == "__main__":
    # Quick standalone test
    sample_text = """
    Retrieval-Augmented Generation (RAG) combines a retrieval system
    with a language model. Instead of relying only on what the model
    memorized during training, RAG fetches relevant documents at query
    time and includes them in the prompt. This lets the model answer
    using current, specific, or private information it was never
    trained on.
    """
    cleaned = preprocess_text(sample_text)
    chunks = chunk_text(cleaned, chunk_size=80, overlap=15)
    for i, c in enumerate(chunks):
        print(f"Chunk {i}: {c!r}")