document.documentElement.classList.add('js');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero');
const sculpture = document.querySelector('.sculpture');
hero?.addEventListener('pointermove', event => {
  if (reducedMotion.matches || event.pointerType !== 'mouse') return;
  const bounds = hero.getBoundingClientRect();
  sculpture.style.setProperty('--mx', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 18}px`);
  sculpture.style.setProperty('--my', `${((event.clientY - bounds.top) / bounds.height - 0.5) * 18}px`);
});
hero?.addEventListener('pointerleave', () => { sculpture.style.setProperty('--mx', '0px'); sculpture.style.setProperty('--my', '0px'); });
const dialog = document.querySelector('#project-dialog');
const names = ['Something thoughtful', 'Something useful', 'Something unexpected'];
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#dialog-title').textContent = names[Number(button.dataset.project)];
  dialog.showModal();
}));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
