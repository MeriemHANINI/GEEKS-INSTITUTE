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

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    
    for (let item of shoppingList) {
        // Check if item is in stock
        if (item in stock && stock[item] > 0) {
            // Add price to total
            total += prices[item];
            
            // Bonus: Decrease stock by 1
            stock[item] -= 1;
        }
    }
    
    return total;
}

console.log("Total price: $" + myBill());
console.log("Updated stock:", stock);