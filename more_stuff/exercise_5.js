function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*  This function splits the string into an array of elements that were
    separated in the string by spaces. It then reverses the contents of that
    array and returns a new array with the length of the elements in the
    original, reversed array.
*/
