"""
vector_store.py — In-Memory Vector Indexing

Responsible for: storing embeddings alongside their source text, and
retrieving the most similar ones to a query vector via cosine
similarity. No external vector database needed for small-scale RAG.
"""

import numpy as np


def cosine_similarity(vec_a, vec_b):
    vec_a = np.array(vec_a)
    vec_b = np.array(vec_b)
    norm_a = np.linalg.norm(vec_a)
    norm_b = np.linalg.norm(vec_b)
    if norm_a == 0 or norm_b == 0:
        return 0.0
    return np.dot(vec_a, vec_b) / (norm_a * norm_b)


class InMemoryVectorStore:
    def __init__(self):
        self.vectors = []
        self.texts = []

    def add(self, text, vector):
        self.texts.append(text)
        self.vectors.append(vector)

    def add_batch(self, texts, vectors):
        for text, vector in zip(texts, vectors):
            self.add(text, vector)

    def search(self, query_vector, top_k=3):
        """Return the top_k (score, text) pairs most similar to the query."""
        if not self.vectors:
            return []

        scored = [
            (cosine_similarity(query_vector, vec), text)
            for vec, text in zip(self.vectors, self.texts)
        ]
        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[:top_k]

    def __len__(self):
        return len(self.vectors)


if __name__ == "__main__":
    # Quick standalone test using simple hand-crafted vectors
    store = InMemoryVectorStore()
    store.add("cats are animals", [1, 0, 0])
    store.add("dogs are animals", [0.9, 0.1, 0])
    store.add("python is a language", [0, 0, 1])

    query_vector = [1, 0, 0]   # should match "cats are animals" best
    results = store.search(query_vector, top_k=2)

    for score, text in results:
        print(f"{score:.4f} -> {text!r}")