'use strict';
const nav = document.querySelector('#main-nav');
const menu = document.querySelector('.menu-toggle');
const navLinks = [...nav.querySelectorAll('a')];
function closeMenu() {
  nav.classList.remove('mobile-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', '메뉴 열기');
}
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
});
navLinks.forEach(link => {
  link.classList.remove('bg-primary-container', 'text-on-primary-container');
  link.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('mobile-open')) { closeMenu(); menu.focus(); }
});
function updateActiveSection() {
  let current = 'home';
  document.querySelectorAll('main section[id]').forEach(section => {
    if (section.getBoundingClientRect().top <= 150) current = section.id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
  navLinks.forEach(link => {
    const active = link.hash === '#' + current;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) closeMenu();
  updateActiveSection();
});
updateActiveSection();
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('hong@example.com');
    status.textContent = '이메일 주소를 복사했습니다.';
  } catch {
    status.textContent = '복사할 주소: hong@example.com';
  }
});
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = `성함: ${data.get('name')}\n회신 이메일: ${data.get('email')}\n\n${data.get('message')}`;
  window.location.href = `mailto:hong@example.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = '메일 앱에서 내용을 확인한 뒤 전송해 주세요.';
});
