let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let lengthArray = arr.map(function (element) {
    return element.length;
  }).filter(function (number) {
    return element % 2 === 1;
  });
  return lengthArray;

}

console.log(oddLengths(arr)); // => [1, 5, 3]
