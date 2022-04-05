function reverse(text) {
  if (text.length === 0) {
    return '';
  }

  return text[text.length - 1] + reverse(text.slice(0, text.length - 1));
}

console.log(reverse('o rato roueu a roupa do rei de roma'));