for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/*  the code does not produce an error. On the same line as the for loop are
    the initialization and conditional expressions, however the increment
    expression is not on that line. We do see it in the body of the for loop,
    and it does increment so it doesn't run on forever and no error is produced.
    It sends the output 1, 2, 3, 4 and 5 to the console on separate lines.
*/
