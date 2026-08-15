"""
Problem: Gas Station
There are n gas stations along a circular route. gas[i] is fuel
available at station i, cost[i] is fuel needed to travel from
station i to i+1. Find the starting station index from which you
can complete the full circuit, or -1 if impossible.
e.g. gas=[1,2,3,4,5], cost=[3,4,5,1,2] -> 3

Pattern: Greedy — if total gas >= total cost, a valid start must
exist. Track a running balance; whenever it goes negative, no
station tried so far could be a valid start, so advance the
candidate start.
"""

def can_complete_circuit(gas, cost):
    total_balance = 0
    running_balance = 0
    start = 0

    for i in range(len(gas)):
        diff = gas[i] - cost[i]
        total_balance += diff
        running_balance += diff

        if running_balance < 0:
            start = i + 1        # can't start from any station up to here
            running_balance = 0

    return start if total_balance >= 0 else -1


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]),
        ([2, 3, 4], [3, 4, 3]),
        ([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]),
    ]
    for gas, cost in test_cases:
        print(f"can_complete_circuit({gas}, {cost}) -> {can_complete_circuit(gas, cost)}")