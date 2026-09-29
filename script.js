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

/* ---------- Countdown ---------- */
const EVENT_START = new Date('2026-10-04T16:00:00Z'); // 4:00PM Ghana time (GMT)
const EVENT_END = new Date(EVENT_START.getTime() + 4 * 60 * 60 * 1000);
const pad = n => String(n).padStart(2, '0');

function tickCountdown() {
  const now = new Date();
  const diff = EVENT_START - now;
  const label = document.getElementById('cd-label');
  const units = document.getElementById('cd-units');

  if (diff <= 0) {
    units.style.display = 'none';
    label.textContent = now < EVENT_END ? 'Happening now! Come in and worship with us' : 'Thank you for joining us!';
    return;
  }
  const s = Math.floor(diff / 1000);
  document.getElementById('cd-d').textContent = Math.floor(s / 86400);
  document.getElementById('cd-h').textContent = pad(Math.floor(s % 86400 / 3600));
  document.getElementById('cd-m').textContent = pad(Math.floor(s % 3600 / 60));
  document.getElementById('cd-s').textContent = pad(s % 60);
}
tickCountdown();
setInterval(tickCountdown, 1000);
