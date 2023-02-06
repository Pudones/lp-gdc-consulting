const menuBtn = document.querySelector('.mobile_menu_button');
const mobileNav = document.querySelector('.mobile_menu_nav');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('mobile_menu--opened');
    mobileNav.classList.toggle('mobile-menu_nav--opened');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('mobile_menu--opened');
    mobileNav.classList.toggle('mobile-menu_nav--opened');
    menuOpen = false;
  }
});
