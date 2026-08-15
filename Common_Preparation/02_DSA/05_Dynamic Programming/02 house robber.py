"""
Problem: House Robber
Given a list of amounts of money in houses along a street, find
the maximum amount you can rob without robbing two adjacent
houses.
e.g. [2, 7, 9, 3, 1] -> 12   (rob houses 0, 2, 4: 2+9+1)

Pattern: 1D DP with take/skip choice — at each house, either take
it (add to best 2 houses back) or skip it (carry forward best from
1 house back).
"""

def house_robber(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        take = nums[i] + dp[i-2]
        skip = dp[i-1]
        dp[i] = max(take, skip)

    return dp[-1]


if __name__ == "__main__":
    test_cases = [
        [2, 7, 9, 3, 1],
        [1, 2, 3, 1],
        [2, 1, 1, 2],
        [5],
        [],
    ]
    for nums in test_cases:
        print(f"house_robber({nums}) -> {house_robber(nums)}")