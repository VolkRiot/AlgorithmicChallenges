import random

def sum(arr):
  if len(arr) == 1:
    return arr[0]
  
  return arr[0] + sum(arr[1:])

print(f"{sum([1,2,3])}")

def quick_sort(arr):
  if len(arr) < 2:
    return arr

  pivot = random.randint(0, (len(arr) - 1))
  pivotValue = arr[pivot]
  remaining = arr[:pivot] + arr[pivot + 1:]

  less = [i for i in remaining if i <= pivotValue]
  more = [i for i in remaining if i > pivotValue]

  return quick_sort(less) + [pivotValue] + quick_sort(more)


test_arr = [2,7,1,0,5,1,8,7,3,2,1]

print(quick_sort(test_arr))


test_dict = {i:i*2 for i in test_arr}

print(test_dict)
print(test_dict[7])