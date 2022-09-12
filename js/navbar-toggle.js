const toggleBtn = document.querySelector('.toggle-btn')
const navbarLinks = document.querySelector('.navbar-links')

toggleBtn.addEventListener('click', () => {
    console.log('click')
    navbarLinks.classList.toggle('active')
})