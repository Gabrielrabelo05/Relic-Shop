// carregamento
let cartAdd = document.getElementsByClassName("add-car");

for (var i = 0; i < cartAdd.length; i++) {
    var button = cartAdd[i];
    button.addEventListener("click", add);
}


//  Abrir o menu
let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
};

loadCartItems()

  // Abrir e fechar o carrinho
function openCart() {
  
    let cart = document.querySelector("#cart");

    if (cart.classList.contains("hidden")) {
        cart.classList.remove("hidden");
    } else {
        cart.classList.add("hidden");
    }
}

// adicionar produto no carrinho
function add(event) {
    var button = event.target;
    var productsShop = button.parentElement;
    var imgElement = productsShop.parentElement.querySelector(".img-products").src
    var titleElement = productsShop.querySelector(".name-product").innerText;
    var priceElement = productsShop.querySelector(".price").innerText;
    
    let cartItemName = document.getElementsByClassName("cart-title-product");

// Verificação de produtos    
    for (var i = 0; i < cartItemName.length; i++) {
        if (cartItemName[i].innerText === titleElement) {
            alert("Produto já adicionado no carrinho");
            return;
        }
    }
// add no localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    cartItems.push({
        img: imgElement,
        title: titleElement,
        price: priceElement
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    addToCart(imgElement, titleElement, priceElement);
}

function addToCart(img, title, price) {

    let cartContent = document.querySelector(".cart-content");

    let cartBox = `
    <div class="detail">
        <img src=${img} alt="" class="img-cart">
        <di>
            <div class="cart-title-product">${title}</div>
            <div class="price-cart">${price}</div>
        </di>
        <i class='bx bx-trash' onclick='removeCartItem(this)'></i>
    </div>`;

    cartContent.innerHTML += cartBox;
}

function loadCartItems() {

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    for (var i = 0; i < cartItems.length; i++) {
        let img = cartItems[i].img;
        let title = cartItems[i].title;
        let price = cartItems[i].price;

        addToCart(img, title, price);
    }
}
// remove produto do carrinho e local
function removeCartItem(event) {
    var clickedBtn = event;
    var cartItem = clickedBtn.parentElement;
    var titleElement = cartItem.querySelector(".cart-title-product").innerText;

    let cartItems = JSON.parse(localStorage.getItem("cartItems"))

    for (var i = 0; i < cartItems.length; i++) {
        if(cartItems[i].title === titleElement) cartItems.splice(i, 1)
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    cartItem.parentElement.removeChild(cartItem);
    alert("Produto retirado do carrinho")
}