let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; i += 1) {
    let x = myArray[i][j];
    if (x % 2 === 0) {
      console.log(x);
    }
  }
}


/*  could also do it this way (per exercise solution):

myArray.forEach(function(nestedArray) {
nestedArray.forEach(function(value) {
if (value % 2 === 0) {
  console.log(value); // => 6, 4, 2, 4, 16, 0
}
});
});

*/
