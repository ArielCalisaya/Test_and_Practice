fruits = [
    {'name': 'apple', 'price': 80},
    {'name': 'watermelon', 'price': 880},
    {'name': 'lemon', 'price': 180}
]

print(
    # [fruit['name'] for fruit in fruits]
    {fruit['name']: fruit['price'] for fruit in fruits}
)
