const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    let didSwap = false;

    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        didSwap = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }

    if (!didSwap) {
      return array;
    }
  }
  
  return array;
};

module.exports = bubbleSort;