def analyze_digits_and_case(user_input):
    user_input = user_input.strip()

    uppercase_count = 0
    digit_sum = 0

    for char in user_input:
        if char.isupper():
            uppercase_count += 1

        if char.isdigit():
            digit_sum += int(char)

    if uppercase_count == 0 and digit_sum == 0:
        return (0, 0)

    return (uppercase_count, digit_sum)