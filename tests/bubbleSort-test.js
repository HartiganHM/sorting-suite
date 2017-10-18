const assert = require('chai').assert;
const bubbleSort = require('../scripts/bubbleSort.js');

describe('Bubble Sort Tests', function() {

	it('Should be a function', function() {
		assert.isFunction(bubbleSort);
	});

	it('Should sort a small array', function() {
		let array = [ 7, 3 ];
		bubbleSort(array);
		assert.deepEqual(array, [ 3, 7 ]);
	});

	it('Should sort an array of ten numbers', function() {
		let array = [ 3, 7, 2, 1, 0, 6, 42, 58, 29, 11 ];
		bubbleSort(array);
		assert.deepEqual(array, [ 0, 1, 2, 3, 6, 7, 11, 29, 42, 58 ]);
	});

	it('Should be able to sort larger numbers', function() {
		let array = [ 1000, 2381, 10923, 13891, 532, 23535 ];
		bubbleSort(array);
		assert.deepEqual(array, [ 532, 1000, 2381, 10923, 13891, 23535 ]);
	});

	it('Should be able to sort negative numbers', function() {
		let array = [ 1, 5, -17, 9, 10, -4, -1, 0 ];
		bubbleSort(array);
		assert.deepEqual(array, [ -17, -4, -1, 0, 1, 5, 9, 10 ]);
	});

	it('Should be able to sort letters', function() {
		let array = [ 'v', 't', 'j', 'c' ];
		bubbleSort(array);
		assert.deepEqual(array, [ 'c', 'j', 't', 'v' ]);
	});
})