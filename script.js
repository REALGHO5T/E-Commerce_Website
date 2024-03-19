const menuOpen = document.getElementById("menuOpen")
const menuClose = document.getElementById("menuClose")
const sidebar = document.querySelector(".sidebar")
const main = document.querySelector(".main")

// Sidebar
menuOpen.addEventListener("click", ()=>{
    sidebar.style.left = "0"
})
menuClose.addEventListener("click", ()=>{
    sidebar.style.left = "-100%"
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});