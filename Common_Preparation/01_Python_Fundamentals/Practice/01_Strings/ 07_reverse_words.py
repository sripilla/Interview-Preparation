"""
Problem: Given "the sky is blue", reverse the order of words
-> "blue is sky the".
"""

def reverse_words(sentence):
    words = sentence.split()   # splits on whitespace, handles extra spaces
    reversed_words = []
    for i in range(len(words) - 1, -1, -1):
        reversed_words.append(words[i])
    return " ".join(reversed_words)


if __name__ == "__main__":
    test_cases = ["the sky is blue", "Python is fun", "hello"]
    for s in test_cases:
        print(f"reverse_words({s!r}) -> {reverse_words(s)!r}")