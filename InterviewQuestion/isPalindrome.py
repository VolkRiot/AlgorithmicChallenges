import re

def is_palindrome(string):
    lowered = str(string).lower()
    regex = re.compile('[^a-zA-Z]')

    filtered = regex.sub('', lowered)
    backwards = filtered[::-1]

    return filtered == backwards


tests = []

tests.append(is_palindrome("Race_car") == True)
tests.append(is_palindrome('BanannaRamma3423') == False)
tests.append(is_palindrome('Race!car?') == True)

answ = False not in tests
print('All tests passed: %s' %answ)
