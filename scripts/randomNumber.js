function createArray () {
  var lowerLimValue = 0;
  var upperLimValue = 1000;
  var arraySizeValue = 1000;
  var resultArray = [];
  for (var i = 0 ; i < arraySizeValue; i++){
    var random = Math.floor(Math.random()*(upperLimValue-lowerLimValue) + lowerLimValue);
    resultArray.push(random);
  }
  return resultArray;
}