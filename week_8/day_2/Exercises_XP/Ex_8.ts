function getAction(role: string): string {
    switch (role) {
        case "admin":
        case "super-admin":
            return "Manage users and settings";

        case "editor":
        case "author":
            return "Edit content";

        case "viewer":
            return "View content";

        case "guest":
            return "Limited access";

        default:
            return "Invalid role";
    }
}

// Tests
console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));
