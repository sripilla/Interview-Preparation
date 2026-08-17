"""
embedding.py — Embedding Creation

Responsible for: converting text chunks into numerical vectors.

Uses FastEmbed as the primary embedding backend (as named in the
exam syllabus). Falls back to a deterministic hash-based mock
embedder if FastEmbed's model can't be downloaded (e.g. no internet
access, like in a sandboxed environment) — this keeps the rest of
the pipeline runnable and testable even offline. In your real exam
environment (with internet access), FastEmbed will be used directly.
"""

import hashlib
import numpy as np


class Embedder:
    def __init__(self, model_name="BAAI/bge-small-en-v1.5", dim=384):
        self.dim = dim
        self.backend = None

        try:
            from fastembed import TextEmbedding
            self.model = TextEmbedding(model_name=model_name)
            self.backend = "fastembed"
        except Exception as e:
            print(f"[Embedder] FastEmbed unavailable ({e.__class__.__name__}), "
                  f"using offline mock embedder instead.")
            self.backend = "mock"

    def embed(self, texts):
        """
        Embed a list of strings, returns a list of vectors (numpy arrays).
        """
        if self.backend == "fastembed":
            return list(self.model.embed(texts))
        else:
            return [self._mock_embed(text) for text in texts]

    def _mock_embed(self, text):
        """
        Deterministic mock embedding: hashes words into a fixed-size
        vector. NOT semantically meaningful like a real model, but
        consistent (same text -> same vector) and behaves correctly
        with cosine similarity for demo/testing purposes — nearly
        identical text will produce very similar vectors.
        """
        vec = np.zeros(self.dim)
        words = text.lower().split()
        for word in words:
            # hash each word into a deterministic index + value
            h = int(hashlib.md5(word.encode()).hexdigest(), 16)
            idx = h % self.dim
            vec[idx] += 1.0
        norm = np.linalg.norm(vec)
        return vec / norm if norm > 0 else vec


if __name__ == "__main__":
    embedder = Embedder()
    texts = [
        "The cat sat on the mat.",
        "Python is a programming language.",
        "A cat was sitting on a mat.",   # semantically close to text 1
    ]
    vectors = embedder.embed(texts)

    print(f"Backend used: {embedder.backend}")
    print(f"Number of vectors: {len(vectors)}")
    print(f"Vector dimensionality: {len(vectors[0])}")