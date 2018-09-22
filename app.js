const navItems = document.querySelectorAll('nav ul li a');
const hamburguerMenu = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.mobile-menu');

const mobileMenuNavItems = document.querySelectorAll('.mobile-menu ul li a');
const arrow = document.querySelector('#banner .arrow');
const desktopNav = document.querySelector('.navegation-container');

hamburguerMenu.addEventListener('click', toggleMobileMenu);
arrow.addEventListener('click', smothScroll);

const destination = document.querySelector('#sobre').offsetTop;

/* --------- mostra nav qnd scroll up --------- */
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


/* ----------- smoth scroll ----------- */
let topDistance = 0;
function smothScroll() {
  
  const speed = 7;
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

/* --------- style desktop menu item clicado --------- */
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

/*---------- toggle mobile menu ----------*/
mobileMenuNavItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMobileMenu);
});

function toggleMobileMenu() {
  hamburguerMenu.classList.toggle('is-active');
  hamburguerMenu.classList.toggle('rotate');
  
  if(mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}


