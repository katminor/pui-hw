// Glazing Option Object with corresponding price additions
let glazingOption = [
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
const packSize = [
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

// Base price 
const basePrice = 2.49;

function generateOptions() {
    // Add glazing option to the glazing dropdown
    glazingSelect = document.getElementById("glazing-select");

    for(var i = 0; i < glazingOption.length; i++) {
        newGlazing = document.createElement("option");
        newGlazing.text = glazingOption[i].glazing;
        newGlazing.value = glazingOption[i].price;
        glazingSelect.add(newGlazing);
    }

    // Add pack-size option to the pack-size dropdown
    packSizeSelect = document.getElementById("pack-select");
    
    for(var i = 0; i < packSize.length; i++) {
        newPackSize = document.createElement("option");
        newPackSize.text = packSize[i].size;
        newPackSize.value = packSize[i].price;
        packSizeSelect.add(newPackSize);
    }

    // Calculates the new price and returns it.
    function calculatePrice() {
        // Gets the values of the dropdown
        var glazingSelected = document.getElementById("glazing-select"); 
        var glazingValue = parseFloat(glazingSelected.value);
        var packSizeSelected = document.getElementById("pack-select"); 
        var packSizeValue = parseFloat(packSizeSelected.value);

        // Calculates the base price plus the glazing value
        var newBase = basePrice + glazingValue;

        // Multiplies this new value by the pack size and rounds it by two decimal places.
        var newPrice = (newBase * packSizeValue).toFixed(2);
        return newPrice
    }

    function updatePrice() {
        var updatedPrice = calculatePrice();
        var price = document.getElementById("update-price").innerText = "$" + updatedPrice.toString();

    }

    // Calculates the new price when glazing select is changed.
    document.getElementById("glazing-select").addEventListener("change", updatePrice)

    // Calculates the new price when pack size select is changed.
    document.getElementById("pack-select").addEventListener("change", updatePrice)
}

// Generates the dropdown options when the page loads.
document.addEventListener("DOMContentLoaded", generateOptions)
