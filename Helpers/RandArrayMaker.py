from random import randint

class RandArrayMaker:
    _range = 100
    start = None
    end = None
    array = []

    def __init__(self, range):
        self.range = range

        if (range * -1) < 0:
            self.start = 1
            self.end = range
        else:
            self.start = range
            self.end = -1

        self.array = self.return_array()

    def return_array(self):
        return self.array

    def return_array(self):
        array = []
        i = self.start

        if i > self.end:
            return []

        while i <= self.end:
            array.append(i)
            i+= 1

        self.array = array
        return array

    def shuffle(self):
        if len(self.array) == 0:
            return []

        for i, num in enumerate(self.array):
            x = randint(0, len(self.array) - i)
            temp = self.array[x]
            self.array[x] = self.array[i]
            self.array[i] = temp
