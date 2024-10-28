let age = 1;
let food = 10;
let isPremium = false;
let petLevel = 1;
let farmLevel = 1;
let tapCount = 0;

// HTML elements
const ageDisplay = document.getElementById('age');
const foodDisplay = document.getElementById('food');
const petLevelDisplay = document.getElementById('pet-level');
const farmLevelDisplay = document.getElementById('farm-level');

// Functions
function feedPlayer() {
    if (food > 0) {
        food--;
        foodDisplay.innerText = food;
        console.log("Player fed!");
    } else {
        alert("Not enough food! Consider using premium options or wait.");
    }
}

function tapToLevelUp() {
    tapCount++;
    const requiredTaps = isPremium ? 25 : 100;
    
    if (tapCount >= requiredTaps) {
        levelUp();
        tapCount = 0;
    } else {
        console.log(`Taps: ${tapCount}/${requiredTaps}`);
    }
}

function levelUp() {
    if (isPremium && age < 30) {
        age += 4;  // Premium players level up 4 ages
    } else if (age < 30) {
        age += 2;  // Free players level up 2 ages
    }
    ageDisplay.innerText = age;
    checkLevelRewards();
}

function checkLevelRewards() {
    if (age >= 8 && age < 18) {
        console.log("Unlocked Pet!");
        petLevel++;
        petLevelDisplay.innerText = petLevel;
    } else if (age >= 18 && age < 30) {
        console.log("Unlocked Farm!");
        farmLevel++;
        farmLevelDisplay.innerText = farmLevel;
    } else if (age >= 30) {
        console.log("Unlocked Marriage Life!");
        // Add marriage-related code here if needed.
    }
}

function purchasePremium() {
    if (confirm("Purchase Premium for $1.99?")) {
        isPremium = true;
        alert("Premium activated! Enjoy enhanced benefits.");
    }
}

function usePremiumFood() {
    if (isPremium) {
        food += 5;
        foodDisplay.innerText = food;
        console.log("Used premium food!");
    } else {
        alert("Premium required to use this option.");
    }
}

// Timer to simulate pet care and farm growth
setInterval(() => {
    if (age >= 8) {
        console.log("Pet interaction needed every 4 hours.");
    }
    if (age >= 18) {
        farmLevel++;
        farmLevelDisplay.innerText = farmLevel;
        console.log("Farm crops grow as you level up!");
    }
}, 4 * 60 * 60 * 1000);  // Runs every 4 hours for simplicity
