let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce((acucmulator, element) => {
    let length = element.length;
    if (length % 2 === 0) {
      accumulator.push(length);
    }
    return lengthArray;
  }, []);

}

console.log(oddLengths(arr)); // => [1, 5, 3]
