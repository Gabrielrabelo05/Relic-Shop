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