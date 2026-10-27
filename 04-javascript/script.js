// ---------- 1. Menu hamburger ----------

// Variable: simpan elemen yang mau dipakai
const tombolMenu = document.querySelector('#tombol-menu');
const menuHp = document.querySelector('#menu-hp');

// Function: apa yang terjadi
function toggleMenu() {
  // toggle = kalau ada class "hidden" hapus, kalau tidak ada tambahkan
  menuHp.classList.toggle('hidden');
  menuHp.classList.toggle('flex');
}

// Event: kapan terjadi (saat tombol diklik)
tombolMenu.addEventListener('click', toggleMenu);


// ---------- 2. Tombol suka + penghitung ----------

const tombolSuka = document.querySelector('#tombol-suka');
const jumlahSuka = document.querySelector('#jumlah-suka');
let suka = 0; // pakai "let" karena nilainya akan berubah

tombolSuka.addEventListener('click', function () {
  suka = suka + 1;
  jumlahSuka.textContent = suka;
});


// ---------- 3. Validasi email ----------

const form = document.querySelector('#form-daftar');
const inputEmail = document.querySelector('#email');
const pesan = document.querySelector('#pesan');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // cegah halaman reload

  const email = inputEmail.value.trim();

  // if / else: ambil keputusan berdasarkan kondisi
  if (email === '') {
    pesan.textContent = 'Email belum diisi.';
    pesan.className = 'mt-3 text-sm text-red-500';
  } else if (!email.includes('@')) {
    pesan.textContent = 'Format email belum benar, harus ada @.';
    pesan.className = 'mt-3 text-sm text-red-500';
  } else {
    pesan.textContent = 'Berhasil! Cek email ' + email + ' untuk langkah berikutnya.';
    pesan.className = 'mt-3 text-sm text-green-600';
    inputEmail.value = '';
  }
});
