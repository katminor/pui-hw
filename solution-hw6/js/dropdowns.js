// Gets the price from the DOM
const price = document.getElementById("price");

// Defines base price
var basePrice = parseFloat(price.innerText.substring(1));

// Selects glazing-select
const glazingSelect = document.getElementById("glazing-select");

// Selects pack-select
const packSizeSelect = document.getElementById("pack-select");

// Adds the glazing dropdown to the page
function addGlazing() {
    for(var i = 0; i < glazingKeys.length; i += 1) {
        // Makes a new option
        var newGlazing = document.createElement("option");

        newGlazing.text = glazingOption[glazingKeys[i]].glazing;
        newGlazing.value = glazingOption[glazingKeys[i]].price;
        glazingSelect.add(newGlazing);
    }
}

// Adds the pack size dropdown to the page
function addPackSize() {
    for(var i = 0; i < packSizeKeys.length; i += 1) {
        // Makes a new option
        var newPackSize = document.createElement("option");

        newPackSize.text = packSizeOption[packSizeKeys[i]].size;
        newPackSize.value = packSizeOption[packSizeKeys[i]].price;
        packSizeSelect.add(newPackSize);
    }
}

// Determines the selected dropdown and calculates the new price.
function getDropDownValues() {
    // Gets the values of the dropdown
    let glazingValue = parseFloat((glazingSelect.value));
    let packSizeValue = parseFloat((packSizeSelect.value));
    let rollBase = basePrice;

    let newPrice = calculatePrice(glazingValue, packSizeValue, rollBase);
    return newPrice;
}

function updatePrice() {
    let updatedPrice = getDropDownValues();
    price.innerText = "$" + updatedPrice.toString();
}

// Calls addGlazing() to add the glazing dropdown
addGlazing();

// Calls addPackSize() to add the glazing dropdown
addPackSize();

// Calculates the new price when glazing select is changed.
glazingSelect.addEventListener("change", updatePrice);

// Calculates the new price when pack size select is changed.
packSizeSelect.addEventListener("change", updatePrice);
