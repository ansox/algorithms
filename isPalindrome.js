function isPalindrome(text) {
  function reverse(text) {
    if (text.length === 0) {
      return '';
    }

    return text[text.length - 1] + reverse(text.slice(0, text.length - 1));
  }

  const reversed = reverse(text);

  return text === reversed;

}

console.log(isPalindrome('amanaplanacanalpanama'));