let numbers = [3, 5, 7];

function sumOfSquares (numbers) {
  return numbers.reduce((accumulator, element) => {
    return accumulator + (element * element)}, 0);
  });
}
