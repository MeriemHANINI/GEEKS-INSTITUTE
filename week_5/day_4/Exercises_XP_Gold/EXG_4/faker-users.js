const { faker } = require('@faker-js/faker');
const prompt = require('prompt-sync')();

let users = [];

function addFakeUser() {
    const user = {
        name: faker.person.fullName(),
        address: {
            street: faker.location.streetAddress(),
            country: faker.location.country()
        }
    };
    users.push(user);
    console.log('Added fake user:', user);
}

function addManualUser() {
    console.log('\nEnter user details:');
    const name = prompt('Full name: ');
    const street = prompt('Street address: ');
    const country = prompt('Country: ');
    
    const user = {
        name: name,
        address: {
            street: street,
            country: country
        }
    };
    users.push(user);
    console.log('Added manual user:', user);
}

function displayAllUsers() {
    console.log('\nAll Users:');
    users.forEach((user, index) => {
        console.log(`${index + 1}. Name: ${user.name}, Address: ${user.address.street}, ${user.address.country}`);
    });
}

// Add some fake users
for (let i = 0; i < 3; i++) {
    addFakeUser();
}

displayAllUsers();

// Uncomment to add manual user
// addManualUser();
// displayAllUsers();

module.exports = { users, addFakeUser, addManualUser, displayAllUsers };