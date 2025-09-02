const tombolNo = document.getElementById('tombol-no');
const tombolYes = document.getElementById('tombol-yes');
const tombolWrapper = document.querySelector('.tombol-wrapper');

// Fungsi untuk gerak random
function gerakRandom() {
  const wrapperWidth = tombolWrapper.offsetWidth;
  const wrapperHeight = tombolWrapper.offsetHeight;
  const tombolWidth = tombolNo.offsetWidth;
  const tombolHeight = tombolNo.offsetHeight;

  const newX = Math.floor(Math.random() * (wrapperWidth - tombolWidth));
  const newY = Math.floor(Math.random() * (wrapperHeight - tombolHeight));

  tombolNo.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Kalau desktop → tombol lari saat hover
function aktifkanDesktop() {
  tombolNo.addEventListener('mouseover', gerakRandom);
}

// Kalau HP → tombol lari saat disentuh
function aktifkanMobile() {
  tombolNo.addEventListener('touchstart', gerakRandom);
  tombolNo.addEventListener('click', gerakRandom);
}

// Deteksi device
if (window.innerWidth > 600) {
  aktifkanDesktop();
} else {
  aktifkanMobile();
}

// Kalau klik "Mauu"
tombolYes.addEventListener('click', () => {
  window.location.href = 'halaman-yes.html';
});
