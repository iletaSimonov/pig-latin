window.addEventListener('load', function(event) {
  const submit = document.getElementById("submitButton");
  const translationDisplay = document.getElementById("translation");
  const wordInput = document.getElementById("wordInput");

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Form Submitted");

    const pigLatinSentence = pigLatin(wordInput.value);
    translationDisplay.textContent = pigLatinSentence;
    wordInput.value = '';
  });

    function pigLatin(sentence) {
      let words = sentence.split(' ');
      let pigLatinWords = [];

      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (isVowel(word[0])) {
          pigLatinWords.push(word + 'way');
        } else if (word.slice(0, 2).toLowerCase() === "qu") {
          pigLatinWords.push(word.slice(2) + word.slice(0, 2) + "ay");
        } else {
          let firstLetter = word[0];
          let pigLatinWord = word.slice(1) + firstLetter + "ay";
          pigLatinWords.push(pigLatinWord);
        }
      }

      return pigLatinWords.join(" ");
    };

    function isVowel(letter) {
      return "aeiou".includes(letter.toLowerCase());
    }

    function firstVowelIndex(word) {
      if (word.slice(0,2).toLowerCase() === "qu") {
        return 2;
      }

        for (let i = 0; i < word.length; i++) {
          if(isVowel(word[0])) {
            return i;
        };
      };
    };
  });


