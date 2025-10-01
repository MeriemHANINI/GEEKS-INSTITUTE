// Stock and Prices objects
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

// Shopping list
const shoppingList = ["banana", "orange", "apple"];

// Function to calculate total bill
function myBill() {
    let total = 0;
    
    for (let item of shoppingList) {
        // Check if the item exists in stock and is available
        if (item in stock && stock[item] > 0) {
            total += prices[item];  // Add the price to total
            stock[item]--;          // Bonus: decrease the stock by 1
        }
    }
    
    return total;
}

// Call the function and show the total price
console.log("Total Price:", myBill());

// Optional: Check stock after shopping
console.log("Updated stock:", stock);
