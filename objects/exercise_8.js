let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*  The above code logs 'hi' and 'hello'. This is because foo is an object,
    which is mutable, while qux is the variable for a string, which is a
    primitive value and is atomic, or not mutable. */
