const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
  // 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. "!") to the end of every username.
  const usernames = [];
  gameInfo.forEach(player => {
    usernames.push(player.username + "!");
  });
  
  console.log("1. Usernames with exclamation point:");
  console.log(usernames);
  console.log(""); // ligne vide pour la lisibilité
  
  // 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
  const winners = [];
  gameInfo.forEach(player => {
    if (player.score > 5) {
      winners.push(player.username);
    }
  });
  
  console.log("2. Winners (score > 5):");
  console.log(winners);
  console.log(""); // ligne vide pour la lisibilité
  
  // 3. Find and display the total score of the users.
  let totalScore = 0;
  gameInfo.forEach(player => {
    totalScore += player.score;
  });
  
  console.log("3. Total score of all users:");
  console.log(totalScore);
  console.log(""); // ligne vide pour la lisibilité
  
  // Affichage de vérification des résultats attendus
  console.log("=== RÉSULTATS ATTENDUS ===");
  console.log("usernames doit être:", ["john!", "becky!", "susy!", "tyson!"]);
  console.log("winners doit être:", ["becky", "susy"]);
  console.log("totalScore doit être: 71");