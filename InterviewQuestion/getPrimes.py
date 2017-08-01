'''
/* Write a function that returns all the prime numbers up to and including the input number.

For example:

```getPrimes(10) // [1, 2, 3, 5, 7]

getPrimes(31) // [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]```*/
'''

def is_prime(n):
    start = 2

    while start < n:
        if n % start == 0:
            return False

        if start >= 3:
            start += 2
        else:
            start += 1

    return True

def get_primes(val):
    start = 2
    final = []

    while start <= val:
        if is_prime(start):
            final.append(start)

        start += 1

    return final

print(get_primes(20))
