const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav button');

function show(id) {
  if (!document.getElementById(id)) id = 'home';
  pages.forEach(p => p.classList.toggle('is-active', p.id === id));
  navButtons.forEach(b => b.classList.toggle('is-active', b.dataset.go === id));
  document.body.classList.toggle('on-home', id === 'home');
  document.getElementById(id).scrollTop = 0;
}


document.querySelectorAll('[data-go]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.go;
    history.pushState({ id }, '', '#' + id);
    show(id);
  });
});


window.addEventListener('popstate', () => show(location.hash.slice(1) || 'home'));

show(location.hash.slice(1) || 'home');
