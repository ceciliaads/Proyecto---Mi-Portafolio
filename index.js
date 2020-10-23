const menuHamburguesa =  document.querySelector(".icono-hamburguesa")
const menu = document.querySelector(".menu-responsive")
const links = document.querySelectorAll(".menu-responsive li");

menuHamburguesa.onclick = () => {
    menu.classList.toggle("hidden")
}

for (let link of links){
    link.onclick = () => {
        menu.classList.add("hidden");
    }
}