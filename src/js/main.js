// Продължи с твоя vanilla JavaScript код тук.
const ham = document.querySelector(".hamburger")
const menu = document.querySelector(".off-screen-menu")

ham.addEventListener("click", ()=> {
    menu.classList.toggle("active")
    ham.classList.toggle("active")
})