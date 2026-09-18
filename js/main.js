/* AI BUILDER course project: deliberately dependency-free, explained JavaScript. */
'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const menuLinks = navigation.querySelectorAll('a');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', opening);
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
});
menuLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

// Each card declares its category in HTML. Filtering never destroys the cards.
const filterButtons = document.querySelectorAll('[data-filter]');
const serviceCards = document.querySelectorAll('.service-card');
const filterCount = document.querySelector('.filter-count');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  let visible = 0;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  serviceCards.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
    if (!card.hidden) visible += 1;
  });
  filterCount.textContent = `SHOWING ${String(visible).padStart(2, '0')}`;
}));

// A local-only simulation: there are intentionally no fetch requests or personal fields.
const dialog = document.querySelector('#request-dialog');
const form = document.querySelector('#request-form');
const result = document.querySelector('#request-result');
const note = document.querySelector('#request-note');
let returnFocusTo = null;

function openRequest(service) {
  returnFocusTo = document.activeElement;
  form.hidden = false;
  result.hidden = true;
  form.reset();
  if (service) {
    const option = Array.from(form.querySelectorAll('input[name="service"]'))
      .find(input => input.value === service);
    if (option) option.checked = true;
  }
  closeMenu();
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
  document.body.classList.add('dialog-open');
}

function closeRequest() {
  dialog.close ? dialog.close() : dialog.removeAttribute('open');
  document.body.classList.remove('dialog-open');
  if (returnFocusTo && returnFocusTo.isConnected) returnFocusTo.focus();
}

document.querySelectorAll('[data-open-request]').forEach(button => {
  button.addEventListener('click', () => openRequest());
});
document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => openRequest(button.dataset.service));
});
document.querySelector('[data-close-request]').addEventListener('click', closeRequest);
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (returnFocusTo && returnFocusTo.isConnected) returnFocusTo.focus();
});
dialog.addEventListener('click', event => {
  // Native dialog closes on Escape; clicking only the backdrop closes it too.
  if (event.target === dialog) closeRequest();
});
form.addEventListener('submit', event => {
  event.preventDefault();
  const selected = form.querySelector('input[name="service"]:checked');
  document.querySelector('#result-service').textContent = selected ? selected.value : 'Not sure';
  document.querySelector('#result-note').textContent = note.value.trim() || 'No additional note';
  form.hidden = true;
  result.hidden = false;
  result.querySelector('h3').setAttribute('tabindex', '-1');
  result.querySelector('h3').focus();
});
document.querySelector('#start-again').addEventListener('click', () => {
  form.reset();
  result.hidden = true;
  form.hidden = false;
  form.querySelector('input[name="service"]:checked').focus();
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
