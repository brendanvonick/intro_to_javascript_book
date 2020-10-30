let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*  This code logs [1, 4, 3] to the console. This is because the variable is
    a pointer to the actual place in memory that stores the array. When the
    array is mutated, all variables pointing to that spot in memory are also
    mutated.
*/
