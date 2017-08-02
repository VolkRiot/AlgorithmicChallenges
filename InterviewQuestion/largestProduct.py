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

# Smart O(n)

def largest_multiple_smarter(arr):

    largestPos = None
    lrgPosIndex = None
    secondPos = None

    largestNeg = None
    lrgNegIndx = None
    secondNeg = None

    maxProductPos = None
    maxProductNeg = None

    for i, val in enumerate(arr):
        if val >= 0:
            if not largestPos:
                largestPos = val
                lrgPosIndex = i

            elif val > largestPos:
                secondPos = largestPos
                largestPos = val
                lrgPosIndex = i

            elif (not secondPos or val > secondPos) and i != lrgPosIndex:
                secondPos = each

        else:

            if not largestNeg:
                largestNeg = val
                lrgNegIndx = i

            elif val < largestNeg:
                secondNeg = largestNeg
                largestNeg = val
                lrgNegIndx = i

            elif ((not secondNeg or (val < secondNeg)) and i != lrgNegIndx):
                secondNeg = each


    if largestPos and secondPos:
        maxProductPos = largestPos * secondPos

    if largestNeg and secondNeg:
        maxProductNeg = largestNeg * secondNeg

    if maxProductNeg and maxProductPos:
        return max(maxProductPos, maxProductNeg)
    elif maxProductPos:
        return maxProductPos
    else:
        return maxProductNeg


print(largest_multiple_smarter([-100, 2, 42, 100]))
