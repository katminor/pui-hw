// Glazing Option Object with corresponding price additions
const glazingOption = [
    {
        glazing: "Keep Original",
        price: 0,
    },
    {
        glazing: "Sugar Milk",
        price: 0,
    },
    {
        glazing: "Vanilla Milk",
        price: 0.5,
    },
    {
        glazing: "Double Chocolate",
        price: 1.5,
    },
];

// Packsize Option Object with corresponding price multiplyers
const packSizeOption = [
    {
        size: "1",
        price: 1,
    },
    {
        size: "3",
        price: 3,
    },
    {
        size: "6",
        price: 5,
    },
    {
        size: "12",
        price: 10,
    },
];

// Gets the price from the DOM
const price = document.getElementById("price");

// Defines base price
const basePrice = parseFloat(price.innerText.substring(1));

// Selects glazing-select
const glazingSelect = document.getElementById("glazing-select");

// Selects pack-select
const packSizeSelect = document.getElementById("pack-select");

// Adds the glazing dropdown to the page
function addGlazing() {
    for(var i = 0; i < glazingOption.length; i += 1) {
        // Makes a new option
        var newGlazing = document.createElement("option");

        newGlazing.text = glazingOption[i].glazing;
        newGlazing.value = glazingOption[i].price;
        glazingSelect.add(newGlazing);
    }
}

// Adds the pack size dropdown to the page
function addPackSize() {
    for(var i = 0; i < packSizeOption.length; i += 1) {
        // Makes a new option
        var newPackSize = document.createElement("option");

        newPackSize.text = packSizeOption[i].size;
        newPackSize.value = packSizeOption[i].price;
        packSizeSelect.add(newPackSize);
    }
}

// Calculates the new price and returns it.
function calculatePrice() {
    // Gets the values of the dropdown
    let glazingValue = parseFloat(glazingSelect.value);
    let packSizeValue = parseFloat(packSizeSelect.value);

    // Calculates the base price plus the glazing value
    let newBase = basePrice + glazingValue;

    // Multiplies this new value by the pack size and rounds it by two decimal places.
    let newPrice = (newBase * packSizeValue).toFixed(2);
    return newPrice;
}

function updatePrice() {
    let updatedPrice = calculatePrice();
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