
'''
Find pair with given sum in the array
Given an unsorted array of integers, find a pair with given sum in it.

For example,

Input:
arr = [8, 7, 2, 5, 3, 1]
sum = 10

Output:
Pair found at index 0 and 2 (8 + 2)
OR
Pair found at index 1 and 4 (7 + 3)
'''

array = [8, 7, 2, 5, 3, 1]
find = 10

def find_pair(array, total):
    refmap = {}

    for i, val in enumerate(array):
        refmap[val] = i

    array.sort()

    lowest = 0
    highest = len(array) - 1

    while lowest < highest:

        if (array[lowest] + array[highest] == total):
            print("Pair found at index %s and %s (%s + %s)" %(refmap[array[lowest]], refmap[array[highest]], array[lowest], array[highest]))

        if(array[lowest] + array[highest]) > total:
            highest -= 1
        else:
            lowest += 1


find_pair(array, find);
