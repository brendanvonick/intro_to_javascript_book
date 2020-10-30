let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(elements, regex) {
  return elements.filter((element) => regex.test(element));
}

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
