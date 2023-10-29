// Opem-menu
let menu = document.querySelector("#menu-icon")
let navmenu = document.querySelector(".navmenu")
let car = document.querySelector(".bx-cart")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navmenu.classList.toggle("open")
}
let test =  document.querySelector(".add-car")

function add(click) {
    alert("Produto adicionado ao carrinho")
}