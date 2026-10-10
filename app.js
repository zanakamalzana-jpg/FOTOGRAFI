const photographs = Array.from(document.querySelectorAll('.photo-card')).map((card) => {
  const image = card.querySelector('img');
  return {
    src: image.src,
    alt: image.alt,
    title: card.querySelector('figcaption span:first-child').textContent.trim(),
  };
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCount = document.getElementById('lightbox-count');
let currentPhotoIndex = 0;

function showPhoto(index) {
  currentPhotoIndex = (index + photographs.length) % photographs.length;
  const photo = photographs[currentPhotoIndex];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxTitle.textContent = photo.title;
  lightboxCount.textContent = `${String(currentPhotoIndex + 1).padStart(2, '0')} / ${String(photographs.length).padStart(2, '0')}`;
}

function openPhoto(index) {
  showPhoto(index);
  if (!lightbox.open) lightbox.showModal();
}

document.querySelectorAll('.photo-card').forEach((card, index) => {
  card.addEventListener('click', () => openPhoto(index));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPhoto(index);
    }
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
document.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(currentPhotoIndex - 1));
document.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(currentPhotoIndex + 1));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') showPhoto(currentPhotoIndex - 1);
  if (event.key === 'ArrowRight') showPhoto(currentPhotoIndex + 1);
});

document.querySelectorAll('.main-nav a, .mobile-nav a, .header-note, .text-link, .round-link, .back-to-top').forEach((link) => {
  link.addEventListener('click', () => {
    const mobileNav = document.getElementById('mobile-nav');
    const menuButton = document.querySelector('.menu-toggle');
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Menü öffnen');
  });
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Menü öffnen' : 'Menü schließen');
  mobileNav.hidden = expanded;
});

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(`Projektanfrage von ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\n\n${data.get('message')}`);
  formNote.textContent = 'Für den tatsächlichen Versand muss noch eine Kontakt-E-Mail-Adresse hinterlegt werden.';
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
