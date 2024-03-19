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

function loadingAnimaton() {
    
    gsap.from("header",{
        y:10,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:1.2
})

gsap.from(".hero-section .hero",{
    // y:100,
    opacity:0,
    scale:0.9,
    delay:1,
    duration:0.4
    
})
}
loadingAnimaton()