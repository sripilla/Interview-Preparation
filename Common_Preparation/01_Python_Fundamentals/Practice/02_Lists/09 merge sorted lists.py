"""
Problem: Merge two sorted lists into one sorted list
(without using sorted()).
"""

def merge_sorted_lists(list1, list2):
    result = []
    i = j = 0

    while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1

    # append any remaining elements
    while i < len(list1):
        result.append(list1[i])
        i += 1
    while j < len(list2):
        result.append(list2[j])
        j += 1

    return result


if __name__ == "__main__":
    test_cases = [
        ([1, 3, 5], [2, 4, 6]),
        ([1, 2, 3], [4, 5, 6]),
        ([], [1, 2, 3]),
        ([1, 1, 2], [1, 3, 3]),
    ]
    for l1, l2 in test_cases:
        print(f"merge_sorted_lists({l1}, {l2}) -> {merge_sorted_lists(l1, l2)}")