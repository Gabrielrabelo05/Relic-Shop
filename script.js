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
    var imgElement = productsShop.parentElement.querySelector(".img-products").src
    var titleElement = productsShop.querySelector(".name-product").innerText;
    var priceElement = productsShop.querySelector(".price").innerText;

    addToCart(imgElement, titleElement, priceElement);
}

function addToCart(img, title, price) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
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
        <img src=${img} alt="" class="img-cart">
        <di>
            <div class="cart-title-product">${title}</div>
            <div class="price-cart">${price}</div>
        </di>
        <i class='bx bx-trash' onclick='removeCartItem(this)'></i>
    </div>`;

    cartContent.innerHTML += cartBox;

//     let cartItens  =  localStorage.getItem("cartItens")||[]

//     cartItens.push({
//         title: titleElement.innerText,
//         price: priceElement.innerText,
//     })

//     localStorage.setItem("cartItens", JSON.stringify(cartItens))

// function loadingCart(){
//     let cartItens = localStorage.getItem(cart)
// }



//     // function cartSave({
//     //     var cartContent  =  document.querySelector(".cart")
//     // })
function saveCartItems(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var cartItems = []

    for (var i = 0; i < cartBoxes.length; i++) {
        cartBox = cartBoxes[i]
        var titleElement = cartBox.getElementsByClassName('name-product')[0]
        var priceElement = cart.getElementsByClassName('price')[0]
        // var productImg = cartBox.getElementsByClassName('cart-img')[0].src

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            // productImg: productImg,
        }
        cartItems.push(item)
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
// Loads In Cart 
function loadCartItems() {
    var cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
        cartItems = JSON.parse(cartItems)

        for(var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i]
            addProductToCart(item.title, item.price, )
        }
        // item.productImg
    }
    var cartTotal = localStorage.getItem('cartTotal')
    if(cartTotal) {
        document.getElementsByClassName('total-price')[0].innerText = "$" + cartTotal
    }
    updateCartIcon()
}


let trashIcon = cartContent.querySelector(".bx-trash");
}
function removeCartItem(event) {
    var clickedBtn = event;
    var cartItem = clickedBtn.parentElement;
    cartItem.parentElement.removeChild(cartItem);
    alert("Produto retirado do carrinho")
}