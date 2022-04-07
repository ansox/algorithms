function nestedEventSum(obj) {
  let sum = 0;

  for (let key in obj) {

    if (typeof obj[key] === 'number') {
      if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }

    if(typeof obj[key] === 'object') {
      sum += nestedEventSum(obj[key]);
    }
  }

  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      test: 6,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEventSum(obj1)); // 6
console.log(nestedEventSum(obj2)); // 10