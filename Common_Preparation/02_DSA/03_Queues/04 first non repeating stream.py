"""
Problem: First Non-Repeating Character in a Stream
Given a stream of characters (processed one at a time), after
each character return the first non-repeating character seen so
far, or -1 if none exists.
e.g. "aabc" -> ['a', -1, 'b', 'b']

Pattern: Queue + frequency dict — queue holds candidates for
"first unique so far"; drop repeated characters from the front.
"""

from collections import deque


def first_non_repeating_stream(stream):
    freq = {}
    q = deque()
    result = []

    for ch in stream:
        freq[ch] = freq.get(ch, 0) + 1
        q.append(ch)

        while q and freq[q[0]] > 1:   # front is now repeated, drop it
            q.popleft()

        result.append(q[0] if q else -1)

    return result


if __name__ == "__main__":
    test_cases = ["aabc", "zz", "abcabc", "x"]
    for stream in test_cases:
        print(f"first_non_repeating_stream({stream!r}) -> {first_non_repeating_stream(stream)}")