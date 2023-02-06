function pigLatin(sentence) {
  let words = sentence.split(' ');
  let pigLatinWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
  }

  if (isVowel(word[0])) {
    pigLatinWords.push(word + 'way');
  } else {
    let index = firstVowelIndex(word);
  }
}