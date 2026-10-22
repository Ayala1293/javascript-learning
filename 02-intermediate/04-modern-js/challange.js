
// Profile Manager 🛠️

const player = {
  name: "Alex",
  level: 5
};

// 1. Spread Operator for Object & Array
const proPlayer = {
  ...player,
  level: 10,
  badges: ["Starter"] // Make it an array!
};

// 2. Combining arrays with spread
const updatedProPlayer = {
  ...proPlayer,
  badges: [...proPlayer.badges, "Champion"] // Adds "Champion" to the array
};

// 3. Destructuring
const { name, level, badges } = updatedProPlayer;

// 4. Rest Parameters & Function
function printPlayerCard(playerName, playerLevel, ...achievements) {
  
  // 5. Optional Chaining (?.) & Ternary Operator (? :) combined
  const guildStatus = player.guild?.name ? "Has Guild" : "No Guild";

  console.log(`Player: ${playerName}`);
  console.log(`Level: ${playerLevel}`);
  console.log(`Badges:`, badges);
  console.log(`Guild Status: ${guildStatus}`);
  console.log(`Achievements unlocked:`, achievements);
}

// 6. Calling the function (passing arguments + rest achievements)
printPlayerCard(name, level, "Won Tournament", "Defeated Boss", "Reached Max Rank");