function factorial(number) {
  let y = 1;
  for (let i = number; i > 0; i -= 1) {
    y *= i;
  }
  return y;
}
