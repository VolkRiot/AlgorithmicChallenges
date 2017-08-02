'''
/* Write a function that accepts an array of integers and returns the largest
number we can get by multiplying two of them. For example, for the array:

[-100, 2, 42, 100]


...We should get `42 * 100 = 4200`. */

'''
import math

# Naive O(n^2)

def largest_multiple(arr):

    max_product = float('-inf')

    for i, val in enumerate(arr):
        for j, val2 in enumerate(arr):
            if i != j:
                max_product = max(max_product, val * val2)

    return max_product;

print(largest_multiple([-100, 2, 42, 100]))
