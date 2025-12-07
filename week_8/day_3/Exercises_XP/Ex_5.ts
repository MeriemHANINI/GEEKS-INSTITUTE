interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string; // optional property
}

function printUserDetails(user: PremiumUser) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
}

// Example usage
const premiumUser: PremiumUser = {
    id: 101,
    name: "John",
    email: "john@example.com",
    membershipLevel: "Gold"
};

printUserDetails(premiumUser);
