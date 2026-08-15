"""
Problem: Activity Selection / Non-overlapping Intervals
Given a list of (start, end) intervals, find the maximum number
of non-overlapping intervals you can select.
e.g. [(1,3),(2,4),(3,5),(6,8)] -> 3   ((1,3),(3,5),(6,8))

Pattern: Greedy — sort by END time, always pick the next interval
whose start doesn't conflict with the last picked interval's end.
"""

def max_non_overlapping_intervals(intervals):
    if not intervals:
        return 0

    intervals = sorted(intervals, key=lambda x: x[1])   # sort by end time
    count = 1
    last_end = intervals[0][1]

    for start, end in intervals[1:]:
        if start >= last_end:   # no overlap with last picked interval
            count += 1
            last_end = end

    return count


if __name__ == "__main__":
    test_cases = [
        [(1, 3), (2, 4), (3, 5), (6, 8)],
        [(1, 2), (2, 3), (3, 4), (1, 3)],
        [(1, 10), (2, 3), (4, 5), (6, 7)],
        [],
    ]
    for intervals in test_cases:
        print(f"max_non_overlapping_intervals({intervals}) -> {max_non_overlapping_intervals(intervals)}")