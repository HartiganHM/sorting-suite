function mergeSort(array) {
	//Base Case
	if (array.length <= 1) {
		return array;
	}
	const midpoint = Math.floor(array.length / 2);
	const a = array.slice(0 , midpoint); // Midpoint exclusive
	const b = array.slice(midpoint, array.length);
	console.log(a);
	console.log(b);
	return merge(mergeSort(a), mergeSort(b));
}

function merge(a, b) {
	let result = [];
	console.log('tick');
	while ( a.length && b.length ) {
		if ( a[0] <= b[0] ) {
			result.push(a.shift);
		} else {
			result.push(b.shift);
		}
	}

	while (a.length) {
		result.push(a);
	}

	while (b.length) {
		result.push(b);
	}

	return result;
}

module.exports = mergeSort;