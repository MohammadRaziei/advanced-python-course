from typeguard import typechecked

@typechecked
def multiply(x: int, y: int) -> int:
    return x * y

print(multiply("hello", 3))  # ❌ Raises TypeError at runtime