const nav_header_bar = document.getElementById('nav-header')
const nav_header_open_button = document.getElementById('header-menu-open')

function HeaderMenuOpen() {
    nav_header_bar.classList.add('nav-header-unhide')
}

function HeaderMenuClose() {
    nav_header_bar.classList.remove('nav-header-unhide')
}