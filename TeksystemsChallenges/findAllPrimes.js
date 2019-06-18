function findAllPrimes(n) {
	const primes = [];
	
	for (let i = 1; i <= n; i++) {
		let value = i;
		let isPrime = true;

		for (let j = i - 1; j > 1; j--) {

			if (value % j === 0) {
				isPrime = false;
				break;
			}

		}

		isPrime && primes.push(i);
	}

	return primes;
}

console.log(findAllPrimes(10000));