const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// 1. Console.log the number of floors
console.log("Number of floors:", building.numberOfFloors);

// 2. Console.log apartments on floors 1 and 3
console.log("Apartments on floor 1:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on floor 3:", building.numberOfAptByFloor.thirdFloor);

// 3. Console.log second tenant and number of rooms
const secondTenant = building.nameOfTenants[1].toLowerCase();
console.log("Second tenant:", building.nameOfTenants[1]);
console.log("Number of rooms:", building.numberOfRoomsAndRent[secondTenant][0]);

// 4. Check rent sum and increase Dan's rent if needed
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent increased to 1200");
}

console.log("Updated building object:", building);