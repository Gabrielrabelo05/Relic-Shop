//  Abrir o menu
let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
};

// Abrir e fechar o carrinho
let cart = document.querySelector("#cart");

function openCart() {
    if (cart.classList.contains("hidden")) {
        cart.classList.remove("hidden");
    } else {
        cart.classList.add("hidden");
    }
}
// Verificar o estado de carregamento do documento.
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeBtnCart = document.getElementsByClassName("box-cart");
    for (var i = 0; i < removeBtnCart.length; i++) {
        var btn = removeBtnCart[i];
        btn.addEventListener("click", removeCartItem);
    }
}

let cartAdd = document.getElementsByClassName("add-car");

for (var i = 0; i < cartAdd.length; i++) {
    var button = cartAdd[i];
    button.addEventListener("click", add);
}

function add(event) {
    var button = event.target;
    var productsShop = button.parentElement;
    var titleElement = productsShop.querySelector(".name-product").innerText;
    var priceElement = productsShop.querySelector(".valuer").innerText;
    addToCart(titleElement, priceElement);
}

function addToCart(title, price) {
    let cartContent = document.querySelector(".cart-content");
    let cartItemName = document.getElementsByClassName("cart-title-product");

    for (var i = 0; i < cartItemName.length; i++) {
        if (cartItemName[i].innerText === title) {
            alert("Produto já adicionado no carrinho");
            return;
        }
    }

    let cartBox = `
        <div class="detail">
            <div class="cart-title-product">${title}</div>
            <div class="price-cart">${price}</div>
            <i class='bx bx-trash'></i>
        </div>`;

    cartContent.innerHTML += cartBox;

    // Agrega el evento de eliminación al ícono de la papelera
    let trashIcon = cartContent.querySelector(".bx-trash");
    trashIcon.addEventListener("click", removeCartItem);
}
function removeCartItem(event) {
    // Navegar até o elemento pai do botão (o item do carrinho) e removê-lo
    var clickedBtn = event.target;
    var cartItem = clickedBtn.parentElement;
    cartItem.parentElement.removeChild(cartItem);
    // alert("Produto retirado do carrinho")
}