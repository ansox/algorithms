function captitalizeWords(arr) {
  if (arr.length === 0) {
    return [];
  }
  
  return [arr[0].toLocaleUpperCase(), ...captitalizeWords(arr.slice(1))];
}

let words = ['i', 'am', 'learning', 'recursion', 'não', 'é', 'um', 'exemplo', 'de', 'recursão'];
console.log(captitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']