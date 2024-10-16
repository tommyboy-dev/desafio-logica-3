// Function to calculate XP based on wins
function calculateXP(wins) {
    return wins * 100; // Consider each win gives 100 XP
}

// Function to calculate rank based on XP
function calculateRank(xpAmount) {
    let rank = "";

    switch (true) {
        case (xpAmount < 1000):
            rank = "Iron";
            break;

        case (xpAmount >= 1001 && xpAmount <= 2000):
            rank = "Bronze";
            break;

        case (xpAmount >= 2001 && xpAmount <= 3000):
            rank = "Silver";
            break;

        case (xpAmount >= 3001 && xpAmount <= 4000):
            rank = "Gold";
            break;

        case (xpAmount >= 4001 && xpAmount <= 6000):
            rank = "Platinum";
            break;

        case (xpAmount >= 6001 && xpAmount <= 8000):
            rank = "Diamond";
            break;

        case (xpAmount >= 8001 && xpAmount <= 9000):
            rank = "Ascendant";
            break;

        case (xpAmount >= 9001 && xpAmount <= 10000):
            rank = "Immortal";
            break;

        case (xpAmount >= 10001):
            rank = "Radiant";
            break;

        default:
            rank = "nonexistent";
    }

    return rank;
}

// "Hero" class with properties: name, age, type, victories, attack method and rank calculation
class Hero {
    constructor(name, age, type, victories) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.victories = victories;
        this.xpAmount = calculateXP(victories); // Calculates XP based on wins
        this.rank = calculateRank(this.xpAmount); // Calculates rank based on XP
    }

    // "Attack" method that shows a message based on the hero type
    attack() {
        let attack;

        // Defines the attack type based on the hero type
        switch (this.type) {
            case 'mage':
                attack = 'magic';
                break;

            case 'warrior':
                attack = 'a sword';
                break;

            case 'monk':
                attack = 'martial arts';
                break;

            case 'ninja':
                attack = 'a shuriken';
                break;

            default:
                attack = 'nothing';
        }

        // Show the full message with name, age, rank, hero type and attack
        console.log(`The hero ${this.name}, age ${this.age}, ${this.rank} ${this.type}, attacked using ${attack}.`);
    }
}

// Example heroes
let hero1 = new Hero('Arthur', 25, 'warrior', 40); // 40 victories
let hero2 = new Hero('Merlin', 150, 'mage', 102); // 102 victories
let hero3 = new Hero('Bruce', 30, 'monk', 25); // 25 victories
let hero4 = new Hero('Ryu', 28, 'ninja', 85); // 85 victories

// Calling the method
hero1.attack(); // Output: The hero Arthur, age 25, rank Gold warrior, attacked using a sword.
hero2.attack(); // Output: The hero Merlin, age 150, rank Radiant mage, attacked using magic.
hero3.attack(); // Output: The hero Bruce, age 30, rank Silver monk, attacked using martial arts.
hero4.attack(); // Output: The hero Ryu, age 28, rank Ascendant ninja, attacked using a shuriken.
