const nav_btns = document.getElementsByClassName('nav-btn')
const tabs = document.getElementsByClassName('content-tab')
const menu_btn = document.getElementById('hidden-btn')
const navbar = document.getElementById('nav-list')


function clearClass () {
    for (let i = 0; i < nav_btns.length; i++) {
        nav_btns[i].classList.remove('active');
        tabs[i].classList.remove('active-tab')
    }
}

nav_btns[0].addEventListener('click', () => {
    clearClass()
    nav_btns[0].classList.add('active')
    tabs[0].classList.add('active-tab')
})
nav_btns[1].addEventListener('click', () => {
    clearClass()
    nav_btns[1].classList.add('active')
    tabs[1].classList.add('active-tab')
})
nav_btns[2].addEventListener('click', () => {
    clearClass()
    nav_btns[2].classList.add('active')
    tabs[2].classList.add('active-tab')
})


menu_btn.addEventListener('click', () => {
    navbar.classList.add('show-nav');
})

document.addEventListener('click' , ()=> {
    if (navbar.classList.contains('show-nav')){
        navbar.classList.remove('show-nav')

    }

})