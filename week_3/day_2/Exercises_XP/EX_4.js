// Hotel cost function
function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay at the hotel?");
        nights = parseInt(nights);
    } while (isNaN(nights) || nights <= 0);
    
    return nights * 140;
}

// Plane ride cost function
function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (typeof destination !== 'string' || destination.trim() === '');
    
    destination = destination.toLowerCase();
    
    switch(destination) {
        case 'london':
            return 183;
        case 'paris':
            return 220;
        default:
            return 300;
    }
}

// Rental car cost function
function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days would you like to rent the car?");
        days = parseInt(days);
    } while (isNaN(days) || days <= 0);
    
    let cost = days * 40;
    
    // Apply discount for rentals longer than 10 days
    if (days > 10) {
        cost *= 0.95; // 5% discount
    }
    
    return cost;
}

// Total vacation cost function
function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    
    console.log(`The hotel cost: $${hotel}`);
    console.log(`The plane tickets cost: $${plane}`);
    console.log(`The car rental cost: $${car}`);
    console.log(`Total vacation cost: $${total}`);
    
    return total;
}

// Call the function
totalVacationCost();