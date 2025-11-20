// main.js - Funcionalidad principal del sitio
// Maneja menú responsive, scroll suave y marcado de enlaces activos.

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Abrir/cerrar menú hamburguesa
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      const icon = menuToggle.querySelector('.icon');
      if (icon) {
        icon.textContent = isExpanded ? '☰' : '✕';
      }
    });
  }

  // Cerrar menú al seleccionar un enlace en móvil
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768 && navMenu && menuToggle) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', function(evento) {
    if (!navMenu || !menuToggle) return;
    const clicFuera = !navMenu.contains(evento.target) && !menuToggle.contains(evento.target);
    if (clicFuera) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      const icon = menuToggle.querySelector('.icon');
      if (icon) icon.textContent = '☰';
    }
  });

  // Cerrar menú con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });

  // Scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const destinoId = this.getAttribute('href');
      if (!destinoId || destinoId === '#') return;
      const objetivo = document.querySelector(destinoId);
      if (objetivo) {
        e.preventDefault();
        objetivo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        objetivo.setAttribute('tabindex', '-1');
        objetivo.focus({ preventScroll: true });
      }
    });
  });

  // Enlace activo en navegación
  const ubicacion = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const ruta = link.getAttribute('href');
    if (!ruta) return;
    if (ruta === ubicacion || (ubicacion === '' && ruta.includes('index.html'))) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    }
  });
});
