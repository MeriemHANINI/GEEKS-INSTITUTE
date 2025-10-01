const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  let sentence = "";

  for (let key in details) {
    sentence += key + " " + details[key] + " ";
  }
  
  console.log(sentence.trim());
  
  const sentence1 = Object.entries(details)
  .map(([key, value]) => key + " " + value)
  .join(" ");

console.log(sentence1);
    