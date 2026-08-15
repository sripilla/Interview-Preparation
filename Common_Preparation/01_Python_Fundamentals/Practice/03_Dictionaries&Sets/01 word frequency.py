"""
Problem: Count word frequency in a sentence -> return dict.
"""

def word_frequency(sentence):
    words = sentence.lower().split()
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq


if __name__ == "__main__":
    test_cases = [
        "the cat sat on the mat",
        "python python is fun and python is powerful",
        "hello world",
    ]
    for s in test_cases:
        print(f"word_frequency({s!r}) -> {word_frequency(s)}")