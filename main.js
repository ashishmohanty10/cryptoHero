const menuBtn = document.getElementById("menu-item")
const navMenu = document.getElementById("nav-menu")
const closeBtn = document.getElementById("close-btn")

menuBtn.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')
})

closeBtn.addEventListener('click',()=>{
    navMenu.classList.add('hidden')
})