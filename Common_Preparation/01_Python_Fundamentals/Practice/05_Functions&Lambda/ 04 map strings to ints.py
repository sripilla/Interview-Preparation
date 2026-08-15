"""
Problem: Use map() to convert a list of strings to integers.
"""

def strings_to_ints(str_list):
    return list(map(int, str_list))


if __name__ == "__main__":
    test_cases = [
        ["1", "2", "3"],
        ["10", "20", "30", "40"],
        ["-5", "0", "100"],
    ]
    for str_list in test_cases:
        print(f"strings_to_ints({str_list}) -> {strings_to_ints(str_list)}")