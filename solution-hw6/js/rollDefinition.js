// Roll options
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// Glazing Options with corresponding price additions
const glazingOption = {
    "Keep Original": {
        glazing: "Keep Original",
        price: 0,
    },
    "Sugar Milk": {
        glazing: "Sugar Milk",
        price: 0,
    },
    "Vanilla Milk": {
        glazing: "Vanilla Milk",
        price: 0.5,
    },
    "Double Chocolate": {
        glazing: "Double Chocolate",
        price: 1.5,
    },
};

// All keys in the glazing option dictionary
const glazingKeys = Object.keys(glazingOption);

// Packsize Options  with corresponding price multiplyers
const packSizeOption = {
    "1": {
        size: "1",
        price: 1,
    },
    "3": {
        size: "3",
        price: 3,
    },
    "6": {
        size: "6",
        price: 5,
    },
    "12": {
        size: "12",
        price: 10,
    },
};

// All keys in the pack size option dictionary
const packSizeKeys = Object.keys(packSizeOption);

// Roll class for making rolls upon purchase.
class Roll {
    constructor(rollType, rollGlazing, packSize) {
        // Expects a string
        this.type = rollType;

        // Expects a string
        this.glazing = rollGlazing;

        // Expects an int
        this.size = packSize;

        // Calculates the price of a roll using the given information. Expects a float
        this.price = calculatePrice(
            glazingOption[rollGlazing].price, 
            packSizeOption[packSize].price, 
            rolls[rollType].basePrice);
    }
}

// Calculates the price of a cinnamon roll
// Glazing is a number representing the price of a glazing.
// packSize is a number representing the price of a pack size.
function calculatePrice(glazingValue, packSizeValue, rollBase) {
    // Calculates the base price plus the glazing value
    let newBase = rollBase + glazingValue;
    

    // Multiplies this new value by the pack size and rounds it by two decimal places.
    let calculatedPrice = (newBase * packSizeValue).toFixed(2);
    return calculatedPrice;
}

// Cart to store planned roll purchases
let cart = [];

// Saves the current cart with rolls to the local storage.
function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartString);
}

// Retrieves the cart from the local storage. This contains all selected rolls.
function retrieveFromLocalStorage() {
    let storedCart = localStorage.getItem('storedCart');
    let rollsArray = JSON.parse(storedCart);
    for (let i = 0; i < rollsArray.length; i++) {
        cart.push(rollsArray[i])
    }
}

// Checks to see if a cart has been created
function checkForCart() {
    if (localStorage.getItem('storedCart') != null) {
        retrieveFromLocalStorage();
    }
}

// Calls to check for cart to ensure it exists.
checkForCart();