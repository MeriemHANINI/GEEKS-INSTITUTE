function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();
    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    let total = days * 40;
    if (days > 10) total *= 0.95; // 5% discount
    return total;
}

function totalVacationCost() {
    let nights, destination, days;

    do {
        nights = Number(prompt("How many nights would you like to stay in the hotel?"));
    } while (isNaN(nights) || nights <= 0);

    do {
        destination = prompt("Where is your destination?");
    } while (!destination || typeof destination !== "string");

    do {
        days = Number(prompt("How many days would you like to rent the car?"));
    } while (isNaN(days) || days <= 0);

    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);

    return hotel + plane + car;
}

// Call the function
totalVacationCost();
