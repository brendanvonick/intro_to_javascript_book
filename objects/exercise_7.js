let obj = {
  color: 'red',
  shape: 'circle'
};

function copyObj(originalObj, keys) {
  let newObj = {};

  if (keys) {
    keys.forEach(function (key) {
      newObj[key] = originalObj[key];
    });

    return newObj;
  } else {
    return Object.assign(newObj, originalObj);
  }
}

console.log(obj);
console.log(copyObj(obj));
