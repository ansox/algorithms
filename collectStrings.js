function collectStrings(obj) {
  const arr = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    }

    if (typeof obj[key] === 'object') {
      arr.push(...collectStrings(obj[key]));
    }
  }

  return arr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                        teste: "teste"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])