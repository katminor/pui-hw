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

// Grabs the search bar from the window.
const queryString = window.location.search;

// Grabs the URL from the search bar.
const params = new URLSearchParams(queryString);

// Gets everything after the word roll in the URL
const rollType = params.get("roll");

// Gets the heading of the page
const navHeading = document.getElementById("nav-heading");

// Gets the product image.
const productImage = document.getElementById("product-image");

/* ---------- Adding the name of the roll to the DOM ---------- */

// Determines the amount of characters until the dot in a file path.
// A roll path is the img path to the image of the roll.
// Input is a string, output is a number.
function rollNameSubstring(rollPath) {
    for(var i = 0; i < rollPath.length; i += 1) {
        if (rollPath[i] === ".") {
            return i;
        }
    }
}

// Formats the roll's name so that it is readable.
// A roll name is the name of the roll including hyphens and bad capitalization. 
// Roll names cannot start with "-"
// Input is a string, output is a string.
function formatRoll(rollName) {
    var formattedName = "";
    for (var i = 0; i < rollName.length; i += 1) {
        // Capitalizes the first letter and letters of new words.
        if ((i === 0)||(formattedName[i - 1] === " ")) {
            formattedName = formattedName + rollName[i].toUpperCase();
        }
        // Removes hyphens.
        else if (rollName[i] === "-") {
            formattedName = formattedName + " ";
        }
        // Creates a new string with new values
        else {
            formattedName = formattedName + rollName[i];
        }
    }
    return formattedName;
}

// Gets the name of the roll.
// A roll type is the name of a roll that corresponds to a roll in the dictionary.
// Input is a string, output is a string
function addRollName() {
    // Adds the roll name to the DOM
    navHeading.innerText = formattedName;
}

// Gets the name of the roll from the image file name.
const rollPath = rolls[rollType].imageFile;

// Removes everything after the dot in the file path
const rollName = rollPath.substring(0, rollNameSubstring(rollPath));

// Formats the roll name to be presentable
const formattedName = formatRoll(rollName);

// Gets the price of the product.
const productPrice = document.getElementById("price");

// Calls the code to get the roll's name and place it into the heading. 
// A roll type is the kind of roll that is being displayed on the page
addRollName();

/* ----------  Adding the image of the roll to the DOM ---------- */

// Adds the image file path for the desired roll
// A roll type is the kind of roll that is being displayed on the page
function addImage() {
    productImage.src = 'products/' + rolls[rollType].imageFile;
}

// Calls the addImage function to add the roll's picture
addImage();

/* ---------- Adding the price of the roll to the DOM ---------- */

// Adds the price for the desired roll
function addPrice() {
    productPrice.innerText = '$' + rolls[rollType].basePrice;
}

// Calls the addPrice function to add the roll's price
addPrice();

/* ---------- Adding the rolls to the cart ---------- */

// Cart to store planned roll purchases
let cart = [];

// Roll class to store the cart items in
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        // Expects a string
        this.type = rollType;

        // Expects a string
        this.glazing = rollGlazing;

        // Expects an int
        this.size = packSize;

        // Expects a float
        this.basePrice = basePrice;
    }
}

function addToCart() {
    // Gets the glazing
    let glazingSelect = document.getElementById("glazing-select");
    var glazing = glazingSelect.options[glazingSelect.selectedIndex].text;
    // Gets the packsize
    let packSelect = document.getElementById("pack-select");
    var packSize = parseInt(packSelect.options[packSelect.selectedIndex].text);
    // Gets the base price of the role
    var rollPrice = parseFloat(document.getElementById("price").innerText.substring(1));
    // let Roll = new Roll(rollType, glazing, packSize, rollPrice);
    let roll = new Roll(rollType, glazing, packSize, rollPrice);

    cart.push(roll);
    console.log(cart);
}

// Adds roll to cart when buy button is clicked
document.getElementById("add-to-cart").addEventListener("click", addToCart);