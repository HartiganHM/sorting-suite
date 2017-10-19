const bubbleSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let didNotSwap = true;

    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        didNotSwap = false;
      }
    }

    if (didNotSwap === true) {
      return array;
    }
  }
  // console.log(array);
  return array;
};

module.exports = bubbleSort;