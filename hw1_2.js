#!/usr/bin/env node

function isPrime(n) {
	var sqrt_n = Math.floor(Math.sqrt(n));
//	console.log("sqrt_n: " + sqrt_n + "\n");
	if ((sqrt_n % 2) == 0) {
		sqrt_n = sqrt_n + 1;
//		console.log("new sqrt_n: " + sqrt_n);
	}
	while (sqrt_n >= 2) {
		if ((n % sqrt_n) == 0) {
//			console.log(n + " divided by " + sqrt_n);
			return false;
		}
		sqrt_n = sqrt_n - 1;
	}
	return true;
}

// n 번째까지의 prime number 를 구한다.
function primesUnder(n) {
	var primes = new Array();
	var count = 0;
	var currentNumber = 2;
	while (n > count) {
		if (isPrime(currentNumber)) {
			primes.push(currentNumber);
			count = count + 1;
		}
		currentNumber = currentNumber + 1;
	}
	return primes;
}

console.log(primesUnder(20));




