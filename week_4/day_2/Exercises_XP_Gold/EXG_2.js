// Code d'analyse
const result = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  
  console.log("Exercise 2 - Result:", result); // Output: [1, 2, 0, 1, 2, 3]
  
  // Version détaillée pour mieux comprendre
  const arrays = [[0, 1], [2, 3]];
  const initialValue = [1, 2];
  
  const detailedResult = arrays.reduce((accumulator, currentValue) => {
    console.log("Accumulator:", accumulator);
    console.log("Current value:", currentValue);
    const newAccumulator = accumulator.concat(currentValue);
    console.log("New accumulator:", newAccumulator);
    console.log("---");
    return newAccumulator;
  }, initialValue);
  
  console.log("Final result:", detailedResult);