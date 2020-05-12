array = [2,3,5,0,17,23]

def add_recursive(nums):
  if len(nums) is 1:
    return nums[0]
  else:
    return nums[0] + add_recursive(nums[1:])

print(add_recursive(array))