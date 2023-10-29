// Opem-menu
let menu = document.querySelector("#menu-icon")
let navmenu = document.querySelector(".navmenu")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navmenu.classList.toggle("open")
}
// alert-addcar
let addcar =  document.querySelector(".add-car")
function add(addcar) {
    alert("Produto adicionado ao carrinho")
}
// abrir e fechar cart
let cart = document.querySelector("#cart")
function openCart() {
    if(cart.classList.contains("hidden")) {
        cart.classList.remove("hidden")
    } else {
        cart.classList.add("hidden")
    }
}
