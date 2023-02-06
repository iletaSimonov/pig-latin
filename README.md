Describe: pigLatin()
Test: "It will add definitions to the words"
Code: pigLatin(""); words; pigLatinWords;
Expected Output: undefined;

Describe: for()
Test: "It will loop through each character in a word"
Code: for (let i = 0; i < words.length; i++)
Expected Output: undefined;

Describe: if()
Test: "It will check if the first letter is a vowel and push 'way'"
Code: (isVowel(word[0])) {pigLatinWords.push(word + "way");}
Expected Output: undefined;

Describe: else {}
Test: "It will find the index of the first vowel"
Code: else { let index = firstVowelIndex(word);}
Expected Output: undefined;

Describe: word.slice(index)
Test: "It will move all the consonants before the first vowel to the end"
Code: let pigLatinWord = word.slice(index) + word.slice(0, index) + "ay"; pigLatinWords.push(pigLatinWord);
Expected Output: undefined;

Describe: return and join()
Test: "It will return the sentence in pig latin"
Code: return pigLatinWords.join(" ");
Expected Output: undefined;

Describe: function isVowel(letter)
Test: "It will check if letter is vowel"
Code: function isVowel(letter) {return "aeiou".includes.toLowerCase());}
Expected Output: undefined;

Describe: function firstVowelIndex(word)
Test: "It will find the index of the first vowel"
Code: function firstVowelIndex(word) {
  if (word.slice(0, 2).toLowerCase() === "qu"){ return 2;}
} Expected Outcome: undefined;


