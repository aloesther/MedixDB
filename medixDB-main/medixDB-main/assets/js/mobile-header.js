// HAMBURGER MENU

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menuBtn.classList.remove("open");
        menu.classList.remove("open");
    }
});