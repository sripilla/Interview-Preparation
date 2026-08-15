"""
Problem: Fractional Knapsack
Given item weights, values, and a capacity, find the maximum
value achievable, where items CAN be broken into fractions
(unlike 0/1 Knapsack).
e.g. weights=[10,20,30], values=[60,100,120], capacity=50 -> 240.0

Pattern: Greedy — sort items by value/weight ratio descending,
take as much of the best-ratio item as possible, then move on.
"""

def fractional_knapsack(weights, values, capacity):
    # pair up and sort by value-to-weight ratio, highest first
    items = sorted(zip(values, weights), key=lambda x: x[0] / x[1], reverse=True)

    total_value = 0.0
    for value, weight in items:
        if capacity >= weight:
            total_value += value
            capacity -= weight
        else:
            total_value += value * (capacity / weight)   # take a fraction
            break

    return total_value


if __name__ == "__main__":
    test_cases = [
        ([10, 20, 30], [60, 100, 120], 50),
        ([5, 10, 15], [10, 20, 30], 10),
        ([1, 2, 3], [10, 15, 40], 6),   # capacity fits everything
    ]
    for weights, values, capacity in test_cases:
        result = fractional_knapsack(weights, values, capacity)
        print(f"fractional_knapsack(weights={weights}, values={values}, capacity={capacity}) -> {result}")