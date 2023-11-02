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

function removeCartItem(event) {
    // Navegar até o elemento pai do botão (o item do carrinho) e removê-lo
    var clickedBtn = event.target;
    var cartItem = clickedBtn.parentElement;
    cartItem.parentElement.removeChild(cartItem);
    // alert("Produto retirado do carrinho")
}

// let cartAdd = document.getElementsByClassName("add-car");

// for (var i = 0; i < cartAdd.length; i++) {
//     var button = cartAdd[i];
//     button.addEventListener("click", add);
// }
// function add(event) {
//     var button = event.target;
//     var productsShop = button.parentElement;
//     var titleElement = productsShop.getElementsByClassName("name-product")[0].innerText;
//     var priceElement = productsShop.getElementsByClassName("valuer")[0].innerText;
//     // var imgElement = productsShop.getElementsByClassName("img-products")[0];
//     addToCart(titleElement, priceElement)
//     // console.log(titleElement, priceElement);
// }
// function addToCart(titleElement, priceElement) {
//     let shopItens = document.createElement("div")
//     let cartIten =  document.getElementsByClassName("cart-content")[0]
//     let cartItemName = cartIten.getElementsByClassName("cart-title-product")[0]
//     for (var i = 0; i < cartItemName.length; i++) {
//         alert("Produto adicionado no carrinho")
//     }
// }

let cartAdd = document.getElementsByClassName("add-car");

for (var i = 0; i < cartAdd.length; i++) {
    var button = cartAdd[i];
    button.addEventListener("click", add);
}

function add(event) {
    var button = event.target;
    var productsShop = button.parentElement;
    var titleElement = productsShop.getElementsByClassName("name-product")[0].innerText;
    var priceElement = productsShop.getElementsByClassName("valuer")[0].innerText;
    addToCart(titleElement, priceElement);
}

function addToCart(title, price) {
    let cartContent = document.querySelector(".cart-content");
    let cartItemName = document.getElementsByClassName("cart-title-product");

    if (cartItemName.length > 0) {
        alert("Produto adicionado no carrinho");
    }
}
