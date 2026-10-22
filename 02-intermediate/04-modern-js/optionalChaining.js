const user = { name: 'Alice' };

// The ?. checks: "Does address exist? If yes, get city. If no, just return undefined instead of crashing."
console.log(user.address?.city); // Output: undefined (no crash!)

const users = []; // Empty array

// Safely checking if the first user exists before trying to read their name
console.log(users[0]?.name); // Output: undefined (no crash!)



//challange

const account = {
  username: "coder123",
  email: "coder@mail.com"
};

console.log(account.settings?.theme)