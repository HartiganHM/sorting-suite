const assert = require('chai').assert;
const mergeSort = require('../scripts/mergeSort.js');
const randomArray = require('../scripts/randomNumber.js').randomArray;
const randomArrayCheck = require('../scripts/randomNumber.js').randomArrayCheck;

describe('Insertion Sort Tests', function() {

	it('Should be a function', function() {
		assert.isFunction(mergeSort);
	});

	it.skip('Should sort a small array', function() {
		let array = [ 7, 3 ];
		mergeSort(array);
		assert.deepEqual(array, [ 3, 7 ]);
	});

	it.skip('Should sort an array of ten numbers', function() {
		let array = [ 3, 7, 2, 1, 0, 6, 42, 58, 29, 11 ];
		mergeSort(array);
		assert.deepEqual(array, [ 0, 1, 2, 3, 6, 7, 11, 29, 42, 58 ]);
	});

	it.skip('Should be able to sort larger numbers', function() {
		let array = [ 1000, 2381, 10923, 13891, 532, 23535 ];
		mergeSort(array);
		assert.deepEqual(array, [ 532, 1000, 2381, 10923, 13891, 23535 ]);
	});

	it.skip('Should be able to sort negative numbers', function() {
		let array = [ 1, 5, -17, 9, 10, -4, -1, 0 ];
		mergeSort(array);
		assert.deepEqual(array, [ -17, -4, -1, 0, 1, 5, 9, 10 ]);
	});

	it.skip('Should be able to sort letters', function() {
		let array = [ 'v', 't', 'j', 'c' ];
		mergeSort(array);
		assert.deepEqual(array, [ 'c', 'j', 't', 'v' ]);
	});

	it.skip('Should be able to sort a random array of 10 numbers', function() {
		let array = randomArray(1, 20, 10);
		assert.deepEqual(randomArrayCheck(mergeSort(array)), true);
	});

	it.skip('Should be able to sort a random array of 100 numbers', function() {
		let array = randomArray(1, 200, 100);
		assert.deepEqual(randomArrayCheck(mergeSort(array)), true);
	});

	it.skip('Should be able to sort a random array of 1,000 numbers', function() {
		let array = randomArray(1, 2000, 1000);
		assert.deepEqual(randomArrayCheck(mergeSort(array)), true);
	});

	it.skip('Should be able to sort a random array of 10,000 numbers', function() {
		let array = randomArray(1, 20000, 10000);
		assert.deepEqual(randomArrayCheck(mergeSort(array)), true);
	});

	it.skip('Should be able to sort a random array of 20,000 numbers', function() {
		let array = randomArray(1, 40000, 20000);
		assert.deepEqual(randomArrayCheck(mergeSort(array)), true);
	});

	it.skip('Should be able to sort a random array of 35,000 numbers', function() {
		let array = randomArray(1, 70000, 35000);
		assert.deepEqual(randomArrayCheck(mergeSort(array)), true);
	});
})