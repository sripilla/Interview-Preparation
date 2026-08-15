"""
Problem: Rotting Oranges
Given a grid where 0 = empty, 1 = fresh orange, 2 = rotten orange,
every minute any fresh orange adjacent to a rotten one also
becomes rotten. Return the minimum minutes until no fresh orange
remains, or -1 if that's impossible.

Pattern: Multi-source BFS using a queue — start from all rotten
oranges simultaneously and spread level by level.
"""

from collections import deque


def rotting_oranges(grid):
    rows, cols = len(grid), len(grid[0])
    q = deque()
    fresh = 0

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                q.append((r, c, 0))   # (row, col, minute it rotted)
            elif grid[r][c] == 1:
                fresh += 1

    minutes = 0
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    while q:
        r, c, minute = q.popleft()
        minutes = max(minutes, minute)
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                q.append((nr, nc, minute + 1))

    return minutes if fresh == 0 else -1


if __name__ == "__main__":
    test_cases = [
        [[2, 1, 1], [1, 1, 0], [0, 1, 1]],   # -> 4
        [[2, 1, 1], [0, 1, 1], [1, 0, 1]],   # -> -1 (unreachable orange)
        [[0, 2]],                             # -> 0 (no fresh oranges)
    ]
    for grid in test_cases:
        # copy since the function mutates the grid
        grid_copy = [row[:] for row in grid]
        print(f"rotting_oranges({grid}) -> {rotting_oranges(grid_copy)}")