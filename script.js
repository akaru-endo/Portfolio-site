document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  const loaderBar = document.querySelector('.loader__bar i');
  const loaderCount = document.querySelector('.loader small b');
  let loading = 0;
  const timer = setInterval(() => {
    loading = Math.min(loading + Math.ceil(Math.random() * 12), 100);
    loaderBar.style.width = `${loading}%`;
    loaderCount.textContent = String(loading).padStart(2, '0');
    if (loading === 100) { clearInterval(timer); setTimeout(() => loader.classList.add('is-out'), 230); }
  }, 55);

  document.querySelector('#year').textContent = new Date().getFullYear();

  // A rotating field of formulas gives every chapter a quiet computational texture.
  const formulas = [
    'H(X) = -&sum; p(x) log<sub>2</sub> p(x)', 'I(X;Y) = H(X) - H(X|Y)', 'D<sub>KL</sub>(P || Q) = &sum; P log(P / Q)',
    'P(A|B) = P(B|A)P(A) / P(B)', 'y = &sigma;(Wx + b)', 'softmax(z)<sub>i</sub> = e<sup>z<sub>i</sub></sup> / &sum; e<sup>z<sub>j</sub></sup>',
    'L = -&sum; y log(y&#770;)', '&nabla;<sub>&theta;</sub> J(&theta;) = 0', '&theta;<sub>t+1</sub> = &theta;<sub>t</sub> - &eta;&nabla;L',
    'E[X] = &int; x p(x) dx', 'Var(X) = E[(X - &mu;)<sup>2</sup>]', 'F(k) = &sum; x(n)e<sup>-i2&pi;kn/N</sup>',
    'x(t) = &int; X(f)e<sup>i2&pi;ft</sup> df', 'f * g = &int; f(&tau;)g(t-&tau;)d&tau;', '&nabla; &middot; E = &rho; / &epsilon;<sub>0</sub>',
    '&nabla;<sup>2</sup>u = 0', '&part;u / &part;t = &alpha;&nabla;<sup>2</sup>u', '&delta;S = 0',
    'det(A - &lambda;I) = 0', 'A = U&Sigma;V<sup>T</sup>', 'Ax = &lambda;x',
    '||x||<sub>2</sub> = &radic;(&sum; x<sub>i</sub><sup>2</sup>)', 'O(n log n)', 'T(n) = 2T(n/2) + n',
    'G = (V, E)', 'P(X<sub>t+1</sub>|X<sub>t</sub>)', 'Q(s,a) &larr; Q(s,a) + &alpha;[r + &gamma; max Q - Q]',
    'R(&theta;) = E[L(f<sub>&theta;</sub>(x),y)]', 'p(z) = (1 + e<sup>-z</sup>)<sup>-1</sup>', '&int;<sub>M</sub> K dA = 2&pi;&chi;(M)',
    '&part;<sub>t</sub>&psi; = H&psi;', 'z = x + iy', 'e<sup>i&pi;</sup> + 1 = 0',
    '&sum;<sub>n=0</sub><sup>&infin;</sup> ar<sup>n</sup> = a/(1-r)', '&part;f / &part;x<sub>i</sub>', '&Lambda; = {&lambda;<sub>1</sub>, ... , &lambda;<sub>n</sub>}'
  ];
  const mathField = document.querySelector('.math-field');
  formulas.forEach((formula, index) => {
    const node = document.createElement('span');
    node.className = 'math-formula'; node.innerHTML = formula;
    node.style.left = `${(index * 29 + 7) % 94}%`; node.style.top = `${(index * 17 + 4) % 95}%`;
    node.style.setProperty('--life', `${9 + (index % 7) * 1.35}s`); node.style.setProperty('--wait', `${-(index % 9) * 1.15}s`);
    node.style.setProperty('--drift', `${index % 2 ? 18 : -18}px`); node.style.setProperty('--formula-opacity', `${.07 + (index % 4) * .025}`);
    mathField.appendChild(node);
  });
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .15 });
  document.querySelectorAll('.reveal-up, .reveal-image').forEach((element) => revealObserver.observe(element));

  const breakObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); breakObserver.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal-break').forEach((element) => breakObserver.observe(element));

  const meter = document.querySelector('.scroll-meter i');
  const header = document.querySelector('.header');
  const updateScroll = () => { const max = document.documentElement.scrollHeight - innerHeight; meter.style.width = `${max ? scrollY / max * 100 : 0}%`; header.classList.toggle('compact', scrollY > 40); };
  addEventListener('scroll', updateScroll, { passive: true }); updateScroll();

  const menuButton = document.querySelector('.menu'); const panel = document.querySelector('.menu-panel');
  const closeMenu = () => { panel.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => { const open = panel.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  if (matchMedia('(pointer:fine)').matches) {
    const cursor = document.querySelector('.cursor'); const dot = document.querySelector('.cursor-dot');
    addEventListener('mousemove', (event) => { cursor.style.left = dot.style.left = `${event.clientX}px`; cursor.style.top = dot.style.top = `${event.clientY}px`; });
    document.querySelectorAll('a, button').forEach((item) => { item.addEventListener('mouseenter', () => cursor.classList.add('hover')); item.addEventListener('mouseleave', () => cursor.classList.remove('hover')); });
    document.querySelectorAll('.magnetic').forEach((item) => { item.addEventListener('mousemove', (event) => { const rect = item.getBoundingClientRect(); item.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .13}px, ${(event.clientY - rect.top - rect.height / 2) * .13}px)`; }); item.addEventListener('mouseleave', () => { item.style.transform = ''; }); });
  }
});
