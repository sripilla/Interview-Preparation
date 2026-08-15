"""
Problem: Find Median from a Data Stream
Design a structure that supports adding numbers one at a time and
retrieving the median at any point.

Pattern: Two heaps — a max-heap for the smaller half of numbers,
a min-heap for the larger half, kept balanced within 1 element.
"""

import heapq


class MedianFinder:
    def __init__(self):
        self.small = []   # max-heap (negated) for lower half
        self.large = []   # min-heap for upper half

    def add_num(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def find_median(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2


if __name__ == "__main__":
    mf = MedianFinder()
    stream = [5, 15, 1, 3]
    for num in stream:
        mf.add_num(num)
        print(f"after adding {num} -> median = {mf.find_median()}")

    print()
    mf2 = MedianFinder()
    for num in [1, 2]:
        mf2.add_num(num)
    print(f"after adding [1, 2] -> median = {mf2.find_median()}")   # 1.5