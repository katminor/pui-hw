// Cart Item Custom Element
class cartItem extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `<div /* class="item" */>
            <div class="cart-item">
                <div class="cart-image">
                    <img src=${this.getAttribute('image')} alt=${this.getAttribute('type')}>
                    <p class="remove">Remove</p>
                </div>
                <div class="cart-description">
                    <p>${this.getAttribute('type')}</p>
                    <p>Glazing: ${this.getAttribute('glazing')}</p>
                    <p>Pack size: ${this.getAttribute('packSize')}</p>
                </div>
            </div>
                <p class="price-item">${this.getAttribute('price')}</p>
            </div>`;
    }
}

window.customElements.define('cart-item', cartItem);

// Takes in an object roll and utilizes this to update the cart.
function addRollToCart(roll) {
    let imagePath = 'products/' + rolls[roll.type].imageFile;
    let rollText = roll.type + ' Cinnamon Roll';
    let glazing = roll.glazing;
    let packSize = roll.size;
    let price = '$' + roll.price;
    document.getElementById("cart").innerHTML += `<cart-item type = "${rollText}" image = ${imagePath} glazing = "${glazing}" packSize = "${packSize}" price = "${price}"></cart-item>`;
}

// Adds the rolls from the cart into the page
function addRollsFromCart() {
    for(var i = 0; i < cart.length; i += 1) {
        addRollToCart(cart[i]);
    }
}

// Calls the addRollsFromCart function
addRollsFromCart();

// A list of all items with remove in it.
const removeClass = document.getElementsByClassName("remove");

// getItemIndex gets the index of the selected item to be removed.
function getItemIndex(selected) {
    let sibling = selected.previousElementSibling;
    let count = 0;
    while (sibling != null) {
        count = count + 1;
        sibling = sibling.previousElementSibling;
    }
    return count;
}

// Removes the removed item from the set representing the cart
// Takes in an index, an index cannot be negative and represents a place in the cart.
function removeFromCart(index) {
    var removedItem = cart.splice(index, 1);
}

// Calculates the total of all rolls in the cart and adds it to the DOM.
function calculateTotal() {
    // A list of all item prices on the cart page
    const itemPriceClass = document.getElementsByClassName("price-item");
    total = 0.00;
    for(var i = 0; i < itemPriceClass.length; i += 1) {
        total = total + parseFloat(itemPriceClass[i].innerText.substring(1));
    }
    addTotalToPage(total.toFixed(2));
}

// Adds the total to the page based off of calculations in calculateTotal
// Expects a float
function addTotalToPage(total) {
    document.getElementById("total-price").innerText = '$' + total;
}


// Removes an item from the cart, calculates the new total, and removes it from the set.
function remove() {
    if (cart.length != 0) {
        let selected = this.parentElement.parentElement.parentElement.parentElement;
        let index = getItemIndex(selected);
        removeFromCart(index);
        selected.remove();
        calculateTotal();
    }
}

// Removes an item from the cart when remove is pressed
function giveRemoveAbility() {
    for(var i = 0; i < removeClass.length; i += 1) {
        removeClass[i].addEventListener("click", remove);
    }
}

// Calls this function to give remove power.
giveRemoveAbility();

// Removes the original 2 cinnamon rolls from the page
function removeOriginal() {
    document.getElementById("cart").firstElementChild.remove();
    document.getElementById("cart").firstElementChild.remove();
}

// Calls this function to remove the two original rolls
removeOriginal();

// Calls this function to get the new total.
calculateTotal();