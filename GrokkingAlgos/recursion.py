def count_down_recursive(n):
  if n == 0:
    return
  
  print(n)
  count_down_recursive(n - 1)

count_down_recursive(10)
