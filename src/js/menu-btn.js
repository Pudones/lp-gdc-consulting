const menuBtn = document.querySelector('.mobile_menu_button');
const mobileNav = document.querySelector('.mobile_menu_nav');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('mobile_menu--opened');
    mobileNav.classList.toggle('mobile_menu_nav--opened');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('mobile_menu--opened');
    mobileNav.classList.toggle('mobile_menu_nav--opened');
    menuOpen = false;
  }
});


const menuItem = document.querySelectorAll('.mobile_menu_nav ul li a')

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menuBtn.classList.remove('mobile_menu--opened')
    mobileNav.classList.remove('mobile_menu_nav--opened')
    menuOpen = false;
    const findSection = item.textContent
    const sectionFormat = findSection.split(' ').join('')

    setTimeout(() => {
      sectionId = document.getElementById(sectionFormat)
      sectionId.scrollIntoView({behavior: "smooth"})
    }, 400);
  })
});