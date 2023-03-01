// Set up
var menu = document.querySelector('nav')
var hamburgerMenu = document.getElementById('main-menu')
var hamburgerBtn = document.querySelector("button.hamburger-btn")

// Should open menu when clicking the hamburger button
hamburgerBtn.onclick = function(e){
    hamburgerMenu.classList.toggle('show-menu')
    hamburgerBtn.focus()
    // Should set aria-expanded="true" to hamburger button when menu is opened
    if(hamburgerMenu.classList.contains('show-menu')){
        hamburgerBtn.setAttribute('aria-expanded', true)
    }
    // Should set aria-expanded="false" to hamburger button when menu is closed
    else{
        hamburgerBtn.setAttribute('aria-expanded', false)
    }
}

// Should close menu when pressing escape and menu items are NOT focused
// Should close menu and focus hamburger button when pressing escape and menu items are focused
document.onkeyup = function(e){
    if(e.key === 'Escape'){
        hamburgerBtn.setAttribute('aria-expanded', false) 
        hamburgerMenu.classList.remove('show-menu')
        hamburgerBtn.focus()
    }
}
document.body.onclick = function(e){
    if(!menu.contains(e.target)){
        hamburgerBtn.setAttribute('aria-expanded', false) 
        hamburgerMenu.classList.remove('show-menu')
        hamburgerBtn.focus()
    }
}