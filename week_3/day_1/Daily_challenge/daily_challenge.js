// 1. Create the sentence
let sentence = "The movie is not that bad, I like it";

// 2. Find the position of "not"
let wordNot = sentence.indexOf("not");

// 3. Find the position of "bad"
let wordBad = sentence.indexOf("bad");

// 4. Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Replace "not...bad" with "good"
  let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  // If condition not met, print original sentence
  console.log(sentence);
}
