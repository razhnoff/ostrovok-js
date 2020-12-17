function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

function assert(a, b) {
  if (a !== b) {
    throw new Error();
  }
  console.log("complete");
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...params) {
        return curried.apply(this, [...args, ...params]);
      };
    }
  };
}
const testCurry = curry(abc);
const testCurryMore = curry(abcdef);
assert(testCurry("A", "B", "C"), "ABC");
assert(testCurry("A")("B")("C"), "ABC");
assert(testCurry("A", "B")("C"), "ABC");
assert(testCurryMore("A")("B")("C")("D")("E")("F"), "ABCDEF");
assert(testCurryMore("A", "B", "C")("D", "E", "F"), "ABCDEF");
