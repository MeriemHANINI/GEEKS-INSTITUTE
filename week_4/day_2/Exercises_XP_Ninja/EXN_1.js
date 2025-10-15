const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];
  
  // Using a loop
  let sumWithLoop = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 'dog') {
      sumWithLoop += data[i].age * 7;
    }
  }
  console.log('Sum with loop:', sumWithLoop);
  
  // Using reduce() method
  const sumWithReduce = data.reduce((total, animal) => {
    if (animal.type === 'dog') {
      return total + (animal.age * 7);
    }
    return total;
  }, 0);
  console.log('Sum with reduce:', sumWithReduce);