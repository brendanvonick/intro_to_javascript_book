let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/*  No, the 2 snippets above do not produce the same output. Both of these
    snippets iterate over the keys of the myObj object, however the for/in
    loop iterates over all keys of myObj, including the inhereted ones
    whereas the Object.keys method doesn't iterate over the inhereted keys,
    just the keys designated specifically for that object. */
