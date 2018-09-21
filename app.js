const navItems = document.querySelectorAll('nav ul li a');
const hamburguerMenu = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.mobile-menu');

const mobileMenuNavItems = document.querySelectorAll('.mobile-menu ul li a');
const arrow = document.querySelector('#banner .arrow');
const desktopNav = document.querySelector('.navegation-container');

hamburguerMenu.addEventListener('click', toggleMobileMenu);
arrow.addEventListener('click', smothScroll);

const destination = document.querySelector('#sobre').offsetTop;

let prevScrollPosition = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPosition > currentScrollPos) {
    desktopNav.style.top = '0px';
    desktopNav.classList.add('scroll-nav');
  } else {
    desktopNav.style.top = '-100px';
  }
  
  prevScrollPosition = currentScrollPos;
  
  if(window.pageYOffset === 0) {
    desktopNav.classList.remove('scroll-nav');
  }
}

/* window.onscroll = () => {    
  const yOffset = window.pageYOffset;
  if(yOffset < 610 && yOffset > 0) {
    console.log("MENOR 610", yOffset);
    desktopNav.style.opacity = 0;
    /* desktopNav.style.display = 'none';  
    desktopNav.classList.remove('scroll-nav');
  } else if(yOffset >= 610) {
    desktopNav.classList.add('scroll-nav');
    /* desktopNav.style.display = 'flex'; 
    desktopNav.style.opacity = 1;
    console.log("ELSE IF", yOffset)
  } else {
    console.log("ELSE", yOffset);
    /* desktopNav.style.display = 'flex'; 
    desktopNav.style.opacity = 1;
  } 
}
 */

/* smoth scroll */
let topDistance = 0;
function smothScroll() {
  
  const speed = 5;
  const scroll = setTimeout(() => {
    smothScroll();
  }, 1);
 
  topDistance += speed;
  
  if(topDistance >= destination + 15) {
    topDistance = 0;
    clearTimeout(scroll);
  } else {
    window.scroll(0, topDistance);
  }  
}

navItems.forEach(navItem => {
  navItem.addEventListener('click', styleNavItem);
})

function styleNavItem(evt) {
  removeActiveClass();
  adicionaActiveClass(evt);
}

function removeActiveClass() {
  navItems.forEach((item) => {
    console.log(item.classList.value)
    if(item.classList.contains('active')) {
      item.classList.remove('active');
    }
  })
}

function adicionaActiveClass(evt) {
  evt.target.classList.add('active');
} 

mobileMenuNavItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMobileMenu);
});

/* toggle mobile menu */
function toggleMobileMenu() {
  hamburguerMenu.classList.toggle('is-active');
  hamburguerMenu.classList.toggle('rotate');
  
  if(mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}


