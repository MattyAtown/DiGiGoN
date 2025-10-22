// script.js for DigiVerse Online

// Menu dropdown toggle
const menuButton = document.querySelector('.menu-button');
let menuOpen = false;

menuButton.addEventListener('click', () => {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  menuOpen = !menuOpen;
});

function openMenu() {
  const menu = document.createElement('div');
  menu.className = 'dropdown-menu';
  menu.innerHTML = `
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/store">Store</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/faq">FAQ</a></li>
    </ul>
  `;
  document.body.appendChild(menu);
  setTimeout(() => menu.classList.add('visible'), 10);
}

function closeMenu() {
  const menu = document.querySelector('.dropdown-menu');
  if (menu) {
    menu.classList.remove('visible');
    setTimeout(() => menu.remove(), 300);
  }
}

// Optional: Animate orbiting portals (cosmic motion)
const orbitRing = document.querySelector('.orbit-ring');
let angle = 0;

function animateOrbit() {
  const portals = orbitRing.querySelectorAll('.portal');
  const radius = 150;
  portals.forEach((portal, index) => {
    const theta = angle + (index * (360 / portals.length)) * (Math.PI / 180);
    const x = Math.cos(theta) * radius;
    const y = Math.sin(theta) * radius;
    portal.style.left = `${200 + x}px`;
    portal.style.top = `${200 + y}px`;
  });
  angle += 0.01;
  requestAnimationFrame(animateOrbit);
}

animateOrbit();
