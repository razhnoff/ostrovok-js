const object = {
  a: 1,
  b: {
    a: 23,
    c: {
      test: true,
      g: "qwertt",
    },
  },
  c: true,
};

function copy(target = {}) {
  let obj = {};
  for (let key in target) {
    if (typeof target[key] === object) {
      return copy(target[key]);
    }
    obj[key] = target[key];
  }

  return obj;
}

console.log(copy(object));
