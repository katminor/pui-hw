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

// Makes sure the internal base price is recalculated when a new price from a new roll is added.
var basePrice = parseFloat(price.innerText.substring(1));

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
    cart.push(roll)

    saveToLocalStorage();

    console.log("Cart in local storage")
    console.log(localStorage.getItem('storedCart'))
    console.log("Cart in js")
    console.log(cart)
}

// Adds roll to cart when buy button is clicked
document.getElementById("add-to-cart").addEventListener("click", addToCart);