"""
Problem: Minimum Platforms
Given arrival and departure times of trains at a station, find
the minimum number of platforms needed so no train has to wait.
e.g. arrivals=[900,940,950,1100,1500,1800]
     departures=[910,1200,1120,1130,1900,2000] -> 3

Pattern: Greedy two-pointer sweep — sort arrivals and departures
independently, then sweep through counting overlapping intervals
(this is really "max overlapping intervals at any point in time").
"""

def min_platforms(arrivals, departures):
    arrivals = sorted(arrivals)
    departures = sorted(departures)

    platforms_needed = 0
    max_platforms = 0
    i = j = 0

    while i < len(arrivals):
        if arrivals[i] <= departures[j]:
            platforms_needed += 1
            max_platforms = max(max_platforms, platforms_needed)
            i += 1
        else:
            platforms_needed -= 1
            j += 1

    return max_platforms


if __name__ == "__main__":
    test_cases = [
        ([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000]),
        ([900, 1100, 1235], [1000, 1200, 1240]),
        ([100, 200, 300], [150, 250, 350]),   # no overlap -> 1 platform
    ]
    for arrivals, departures in test_cases:
        print(f"min_platforms({arrivals}, {departures}) -> {min_platforms(arrivals, departures)}")