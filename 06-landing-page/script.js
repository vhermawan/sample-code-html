// ===== 1. Menu hamburger (HP) =====
const tombolMenu = document.querySelector('#tombol-menu');
const menuHp = document.querySelector('#menu-hp');

tombolMenu.addEventListener('click', function () {
  menuHp.classList.toggle('hidden');
  menuHp.classList.toggle('flex');
});

// Tutup menu setelah salah satu link diklik
menuHp.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    menuHp.classList.add('hidden');
    menuHp.classList.remove('flex');
  });
});


// ===== 2. FAQ buka-tutup =====
document.querySelectorAll('.faq-tanya').forEach(function (tanya) {
  tanya.addEventListener('click', function () {
    tanya.nextElementSibling.classList.toggle('hidden');
    tanya.querySelector('.faq-ikon').classList.toggle('rotate-45');
  });
});


// ===== 3. Validasi form daftar =====
const form = document.querySelector('#form-daftar');
const inputEmail = document.querySelector('#email');
const pesan = document.querySelector('#pesan');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = inputEmail.value.trim();

  if (email === '') {
    pesan.textContent = 'Email belum diisi.';
  } else if (!email.includes('@')) {
    pesan.textContent = 'Format email belum benar, harus ada @.';
  } else {
    pesan.textContent = 'Terima kasih! Info kelas akan dikirim ke ' + email + '.';
    inputEmail.value = '';
  }
});
