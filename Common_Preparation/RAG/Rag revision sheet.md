# RAG (Retrieval-Augmented Generation) — Quick Revision Sheet

Covers your exam syllabus: Document Ingestion + Preprocessing, Embedding
Creation (FastEmbed), In-Memory Vector Indexing, Module Separation.

## 1. What is RAG (big picture)
RAG lets an LLM answer questions using YOUR documents instead of
relying only on what it memorized during training.

```
Document → Chunk → Embed → Store → [User Query] → Embed Query →
Similarity Search → Retrieve Top-K Chunks → Feed to LLM → Answer
```

**Why it matters:** LLMs have a knowledge cutoff and can't know your
private/internal documents. RAG retrieves relevant passages at query
time and includes them in the prompt, so the LLM answers grounded in
real, current, specific content — not just what it "remembers."

## 2. Pattern 1 — Document Ingestion + Preprocessing (Chunking)
Large documents must be split into smaller pieces ("chunks") before
embedding — LLMs and embedding models have limited context windows,
and smaller chunks retrieve more precisely.

```python
def chunk_text(text, chunk_size=500, overlap=50):
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += chunk_size - overlap   # overlap prevents losing context at boundaries
    return chunks

text = "Your long document content here..."
chunks = chunk_text(text, chunk_size=200, overlap=20)
print(f"Split into {len(chunks)} chunks")
```
**Key idea:** `overlap` means consecutive chunks share some text — this
prevents a sentence or idea from being awkwardly cut in half right at
a chunk boundary, which would hurt retrieval quality.

**Preprocessing steps to know:**
- Remove excessive whitespace/special characters
- Normalize encoding (handle unicode issues)
- Strip boilerplate (headers/footers in PDFs, HTML tags)
- Sometimes split by semantic units (paragraphs/sentences) rather than
  a fixed character count — "smart chunking"

## 3. Pattern 2 — Embedding Creation (FastEmbed)
An embedding converts text into a vector (list of numbers) that
captures its meaning — similar meaning = similar vector direction.

```python
from fastembed import TextEmbedding

# Load a lightweight embedding model (downloads once, then cached)
model = TextEmbedding(model_name="BAAI/bge-small-en-v1.5")

documents = [
    "The cat sat on the mat.",
    "Python is a programming language.",
    "Dogs are loyal animals.",
]

# embed() returns a generator of numpy arrays — convert to list to use
embeddings = list(model.embed(documents))

print(len(embeddings))        # 3 — one vector per document
print(len(embeddings[0]))       # ~384 — the vector's dimensionality (model-dependent)
print(type(embeddings[0]))        # numpy.ndarray

# Embedding a single query works the same way
query_embedding = list(model.embed(["What animal sat on the mat?"]))[0]
```
**Key idea:** `FastEmbed` is a lightweight library built for fast,
local embedding generation (via ONNX models) without needing a full
ML framework like PyTorch — this is likely why it's called out
specifically in your syllabus (fast + minimal dependencies).

**Note:** in an exam sandbox with no internet, the model download
would fail — if that happens, know the API/concepts even if you can't
run it live; interviewers often care that you understand the flow.

## 4. Pattern 3 — In-Memory Vector Indexing + Similarity Search
Store embeddings in a simple in-memory structure (list/array — no
external vector DB needed for small-scale RAG), then find the most
similar ones to a query using cosine similarity.

```python
import numpy as np

def cosine_similarity(vec_a, vec_b):
    vec_a = np.array(vec_a)
    vec_b = np.array(vec_b)
    return np.dot(vec_a, vec_b) / (np.linalg.norm(vec_a) * np.linalg.norm(vec_b))

class InMemoryVectorStore:
    def __init__(self):
        self.vectors = []      # list of embeddings
        self.texts = []          # corresponding original text chunks

    def add(self, text, vector):
        self.texts.append(text)
        self.vectors.append(vector)

    def search(self, query_vector, top_k=3):
        scores = [
            (cosine_similarity(query_vector, vec), text)
            for vec, text in zip(self.vectors, self.texts)
        ]
        scores.sort(key=lambda x: x[0], reverse=True)   # highest similarity first
        return scores[:top_k]

# Usage
store = InMemoryVectorStore()
for text, vec in zip(documents, embeddings):
    store.add(text, vec)

results = store.search(query_embedding, top_k=2)
for score, text in results:
    print(f"{score:.4f} -> {text}")
```
**Key idea:** cosine similarity measures the ANGLE between two
vectors (ignoring magnitude) — a score of 1.0 means identical
direction (very similar meaning), -1.0 means opposite. This is the
standard metric for comparing embeddings.

## 5. Pattern 4 — Module Separation (Clean Architecture)
Structure RAG code into distinct, testable components rather than one
giant script — this is likely explicitly tested since it's called out
separately in your syllabus.

```python
# ingestion.py — handles loading + chunking documents
def load_document(filepath):
    with open(filepath, 'r') as f:
        return f.read()

def chunk_text(text, chunk_size=500, overlap=50):
    # ... (as shown above)
    pass

# embedding.py — handles converting text to vectors
class Embedder:
    def __init__(self, model_name="BAAI/bge-small-en-v1.5"):
        from fastembed import TextEmbedding
        self.model = TextEmbedding(model_name=model_name)

    def embed(self, texts):
        return list(self.model.embed(texts))

# vector_store.py — handles storage + retrieval
class InMemoryVectorStore:
    # ... (as shown above)
    pass

# generation.py — handles building the final prompt + calling the LLM
def build_prompt(query, retrieved_chunks):
    context = "\n\n".join(retrieved_chunks)
    return f"""Answer the question using only the context below.

Context:
{context}

Question: {query}
Answer:"""

# main.py — orchestrates the full pipeline
def rag_pipeline(filepath, query):
    text = load_document(filepath)
    chunks = chunk_text(text)

    embedder = Embedder()
    chunk_embeddings = embedder.embed(chunks)

    store = InMemoryVectorStore()
    for chunk, vec in zip(chunks, chunk_embeddings):
        store.add(chunk, vec)

    query_vec = embedder.embed([query])[0]
    top_chunks = [text for score, text in store.search(query_vec, top_k=3)]

    prompt = build_prompt(query, top_chunks)
    return prompt   # would be sent to an LLM API next
```
**Key idea:** each module has ONE responsibility (ingestion, embedding,
storage, generation). This makes the code testable, reusable, and easy
to reason about — exactly what an assessment grading "code quality"
would look for.

## 6. Full Pipeline Flow (Summary)
| Step | What happens | Tool/concept |
|---|---|---|
| 1. Ingest | Load raw document | file reading |
| 2. Preprocess | Clean text | strip whitespace, normalize |
| 3. Chunk | Split into pieces | fixed-size + overlap, or semantic |
| 4. Embed | Convert chunks to vectors | FastEmbed |
| 5. Store | Save vectors + text | in-memory list/array |
| 6. Query | Embed the user's question | same embedder |
| 7. Retrieve | Find top-K similar chunks | cosine similarity |
| 8. Generate | Build prompt with context, call LLM | prompt engineering |

## 7. Common Terms to Know (likely MCQ material)
- **Chunk size** — how many characters/tokens per chunk
- **Overlap** — shared text between consecutive chunks
- **Embedding dimensionality** — length of the vector (model-specific,
  e.g. 384 or 768)
- **Top-K retrieval** — returning the K most similar chunks
- **Cosine similarity** — standard metric for comparing embedding vectors
- **Vector store / vector database** — specialized storage for
  embeddings (Pinecone, Chroma, FAISS are real-world examples; your
  syllabus wants IN-MEMORY, i.e. no external DB)
- **Semantic search** — search by meaning (via embeddings) rather than
  exact keyword match

## Priority Checklist for the Exam
- [ ] Understand the full RAG pipeline end-to-end (ingest → chunk → embed → store → retrieve → generate)
- [ ] Know why chunking + overlap matters
- [ ] Comfortable with the FastEmbed API (`TextEmbedding`, `.embed()`)
- [ ] Can implement cosine similarity from scratch
- [ ] Can build a simple in-memory vector store class (add + search)
- [ ] Understand why module separation matters for RAG code specifically