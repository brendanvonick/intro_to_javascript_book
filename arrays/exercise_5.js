function removeNonInteger(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}
