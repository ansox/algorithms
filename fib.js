function f(num) {
  let previous = NaN;
  let result = 1;


  function helper(num)  {
    if (num === 0) {
      return 0;
    }

    if (isNaN(previous)) {
      previous = 0;
      result = 1;
    } else {
      let temp = result;
      result += previous;
      previous = temp;
    }
      
    console.log(result);

    return helper(num - 1);
  }

  helper(num);

  return result;
}

console.log(f(250));

// esse jeito é tradicional mas o de cima é mais eficiente
// function f(num) {
//   if (num <= 2) return 1;

//   return f(num - 1) + f(num - 2);
// }

// console.log(f(50));