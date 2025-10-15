let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}

// Create another arrow function named cloneGroceries
const cloneGroceries = () => {
    // Create a variable named user that is a copy of the client variable
    let user = client;
    
    // Change the client variable to "Betty"
    client = "Betty";
    
    console.log("Client:", client);
    console.log("User:", user);
    console.log("Will we also see this modification in the user variable? NO");
    console.log("Why? Because strings are primitive types and are passed by value. When we assign client to user, we create a copy of the value.");
    console.log("---");
    
    // Create a variable named shopping that is equal to the groceries variable
    let shopping = groceries;
    
    // Change the value of the totalPrice key to 35$
    shopping.totalPrice = "35$";
    
    console.log("Groceries totalPrice:", groceries.totalPrice);
    console.log("Shopping totalPrice:", shopping.totalPrice);
    console.log("Will we also see this modification in the shopping object? YES");
    console.log("Why? Because objects are passed by reference. Both variables point to the same object in memory.");
    console.log("---");
    
    // Change the value of the paid key to false
    shopping.other.paid = false;
    
    console.log("Groceries paid:", groceries.other.paid);
    console.log("Shopping paid:", shopping.other.paid);
    console.log("Will we also see this modification in the shopping object? YES");
    console.log("Why? Because we're modifying a nested property of the same object that both variables reference.");
}

// Invoke the functions
console.log("=== Displaying Groceries ===");
displayGroceries();

console.log("\n=== Cloning Groceries ===");
cloneGroceries();