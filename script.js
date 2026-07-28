/* Portfolio interactions: loader, scroll reveals, pointer treatment and mobile navigation. */
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  const counter = document.querySelector('.loader__count');
  const bar = document.querySelector('.loader__line i');
  const year = document.querySelector('#year');
  year.textContent = new Date().getFullYear();

  // Keep the loading moment short, while still showing a polished arrival.
  let progress = 0;
  const loading = setInterval(() => {
    progress = Math.min(progress + Math.ceil(Math.random() * 14), 100);
    counter.textContent = String(progress).padStart(2, '0');
    bar.style.width = `${progress}%`;
    if (progress === 100) {
      clearInterval(loading);
      setTimeout(() => loader.classList.add('is-loaded'), 250);
    }
  }, 65);

  // Reveal elements as they enter the viewport.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal-up, .reveal-scale').forEach((el) => observer.observe(el));

  // A light custom cursor for devices that support a fine pointer.
  if (window.matchMedia('(pointer:fine)').matches) {
    const cursor = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor-dot');
    window.addEventListener('mousemove', (event) => {
      dot.style.left = cursor.style.left = `${event.clientX}px`;
      dot.style.top = cursor.style.top = `${event.clientY}px`;
    });
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  // Buttons subtly follow the pointer, then return to their original place.
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (event) => {
      if (!window.matchMedia('(pointer:fine)').matches) return;
      const bounds = el.getBoundingClientRect();
      el.style.transform = `translate(${(event.clientX - bounds.left - bounds.width / 2) * .16}px, ${(event.clientY - bounds.top - bounds.height / 2) * .16}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // Accessible mobile menu state.
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const menuLinks = menu.querySelectorAll('a');
  const closeMenu = () => { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.querySelector('span').textContent = 'Menu'; };
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.querySelector('span').textContent = open ? 'Close' : 'Menu';
  });
  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
});
