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
    let productsShop = button.parentElement;
    let imgElement = productsShop.parentElement.querySelector(".img-products").src
    let titleElement = productsShop.querySelector(".name-product").innerText;
    let priceElement = productsShop.querySelector(".price").innerText;
    
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
// atualização do valor
let test = 0
const data = localStorage.getItem("cartItems");
const json = JSON.parse(data);
const total = json.map(obj => Number(obj.price.slice(1))).reduce((total, valor) => total + valor, 0);
document.querySelector('.prince-total').textContent = `$${total}`;

const allAdd = document.querySelectorAll('.add-car');
const allLixeira = document.querySelectorAll('.bx-trash');
        allLixeira.forEach(function(element) {
            element.addEventListener('click', function() {
                let test = 0
                const data = localStorage.getItem("cartItems");
                const json = JSON.parse(data);
                const total = json.map(obj => Number(obj.price.slice(1))).reduce((total, valor) => total + valor, 0);
                document.querySelector('.prince-total').textContent = `$${total}`;
            });
        });
allAdd.forEach(function(element) {
    element.addEventListener('click', function() {
        let test = 0
        const data = localStorage.getItem("cartItems");
        const json = JSON.parse(data);
        const total = json.map(obj => Number(obj.price.slice(1))).reduce((total, valor) => total + valor, 0);
        document.querySelector('.prince-total').textContent = `$${total}`;

        const allLixeira = document.querySelectorAll('.bx-trash');
        allLixeira.forEach(function(element) {
            element.addEventListener('click', function() {
                let test = 0
                const data = localStorage.getItem("cartItems");
                const json = JSON.parse(data);
                const total = json.map(obj => Number(obj.price.slice(1))).reduce((total, valor) => total + valor, 0);
                document.querySelector('.prince-total').textContent = `$${total}`;
            });
        });
    });
});
let btnBuy = document.querySelector(".buy-btn")
btnBuy.addEventListener("click", function() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cartItems.length > 0){
        alert("Compra realizada com sucesso")
        clearCart()
    } else {
        alert("Carrinho vazio")
    }
});
function clearCart() {
    // Limpar o conteúdo do carrinho no HTML, localStorage e total
    let cartContent = document.querySelector(".cart-content");
    cartContent.innerHTML = "";

    localStorage.removeItem("cartItems");

    document.querySelector('.prince-total').textContent = "$0";
}