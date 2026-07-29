// Returns the right value only if the left side is null or undefined.
const user = { name: "Guhan", age: 24 };
console.log(user.role); // undefined
console.log(user?.role ?? "Guest"); // Guest
