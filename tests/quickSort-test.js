const assert = require('chai').assert;
const quickSort = require('../scripts/quickSort.js');
const randomArray = require('../scripts/randomNumber.js').randomArray;
const randomArrayCheck = require('../scripts/randomNumber.js').randomArrayCheck;

describe('Quick Sort Tests', function() {

	it('Should be a function', function() {
		assert.isFunction(quickSort);
	});

	it('Should sort a small array', function() {
		let array = [ 7, 3 ];
		assert.deepEqual(quickSort(array), [ 3, 7 ]);
	});

	it('Should sort an array of ten numbers', function() {
		let array = [ 3, 7, 2, 1, 0, 6, 42, 58, 29, 11 ];
		assert.deepEqual(quickSort(array), [ 0, 1, 2, 3, 6, 7, 11, 29, 42, 58 ]);
	});

	it('Should be able to sort larger numbers', function() {
		let array = [ 1000, 2381, 10923, 13891, 532, 23535 ];
		assert.deepEqual(quickSort(array), [ 532, 1000, 2381, 10923, 13891, 23535 ]);
	});

	it('Should be able to sort negative numbers', function() {
		let array = [ 1, 5, -17, 9, 10, -4, -1, 0 ];
		assert.deepEqual(quickSort(array), [ -17, -4, -1, 0, 1, 5, 9, 10 ]);
	});

	it('Should be able to sort letters', function() {
		let array = [ 'v', 't', 'j', 'c' ];
		assert.deepEqual(quickSort(array), [ 'c', 'j', 't', 'v' ]);
	});

	it('Should be able to sort a random array of 10 numbers', function() {
		let array = randomArray(1, 20, 10);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 100 numbers', function() {
		let array = randomArray(1, 200, 100);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 1,000 numbers', function() {
		let array = randomArray(1, 2000, 1000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 10,000 numbers', function() {
		let array = randomArray(1, 20000, 10000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 20,000 numbers', function() {
		let array = randomArray(1, 40000, 20000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 35,000 numbers', function() {
		let array = randomArray(1, 70000, 35000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 50,000 numbers', function() {
		let array = randomArray(1, 100000, 50000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 75,000 numbers', function() {
		let array = randomArray(1, 150000, 75000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 100,000 numbers', function() {
		let array = randomArray(1, 200000, 100000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 150,000 numbers', function() {
		let array = randomArray(1, 300000, 150000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 200,000 numbers', function() {
		let array = randomArray(1, 400000, 200000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 300,000 numbers', function() {
		let array = randomArray(1, 600000, 300000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 400,000 numbers', function() {
		let array = randomArray(1, 800000, 400000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 500,000 numbers', function() {
		let array = randomArray(1, 1000000, 500000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 600,000 numbers', function() {
		let array = randomArray(1, 1200000, 600000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 700,000 numbers', function() {
		let array = randomArray(1, 1400000, 700000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 800,000 numbers', function() {
		let array = randomArray(1, 1600000, 800000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 900,000 numbers', function() {
		let array = randomArray(1, 1800000, 900000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 1,000,000 numbers', function() {
		let array = randomArray(1, 2000000, 1000000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 1,250,000 numbers', function() {
		let array = randomArray(1, 2500000, 1250000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 1,500,000 numbers', function() {
		let array = randomArray(1, 3000000, 1500000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 1,750,000 numbers', function() {
		let array = randomArray(1, 3500000, 1750000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 2,000,000 numbers', function() {
		let array = randomArray(1, 4000000, 2000000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 2,250,000 numbers', function() {
		let array = randomArray(1, 4500000, 2250000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it('Should be able to sort a random array of 2,500,000 numbers', function() {
		let array = randomArray(1, 5000000, 2500000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it.skip('Should be able to sort a random array of 2,750,000 numbers', function() {
		let array = randomArray(1, 5500000, 2750000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});

	it.skip('Should be able to sort a random array of 3,000,000 numbers', function() {
		let array = randomArray(1, 6000000, 3000000);
		assert.deepEqual(randomArrayCheck(quickSort(array)), true);
	});
})