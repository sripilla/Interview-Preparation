"""
Problem: Given a list of numbers, separate into evens and odds
into two lists.
"""

def separate_evens_odds(arr):
    evens = []
    odds = []
    for num in arr:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)
    return evens, odds


if __name__ == "__main__":
    test_cases = [
        [1, 2, 3, 4, 5, 6],
        [10, 15, 20, 25],
        [1, 3, 5, 7],
    ]
    for arr in test_cases:
        evens, odds = separate_evens_odds(arr)
        print(f"separate_evens_odds({arr}) -> evens={evens}, odds={odds}")