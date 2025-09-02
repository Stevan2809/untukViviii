const tombolNo = document.getElementById('tombol-no');
const tombolYes = document.getElementById('tombol-yes');
const tombolWrapper = document.querySelector('.tombol-wrapper');

// Fungsi gerak random versi mobile
function gerakRandomMobile() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const tombolWidth = tombolNo.offsetWidth;
  const tombolHeight = tombolNo.offsetHeight;

  // Batas area supaya tombol nggak keluar layar
  const maxX = screenWidth - tombolWidth - 20; 
  const maxY = screenHeight - tombolHeight - 20;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  tombolNo.style.position = "fixed"; // biar bisa bebas di layar
  tombolNo.style.left = `${newX}px`;
  tombolNo.style.top = `${newY}px`;
}

// Fungsi gerak random versi desktop (dalam wrapper)
function gerakRandomDesktop() {
  const wrapperWidth = tombolWrapper.offsetWidth;
  const wrapperHeight = tombolWrapper.offsetHeight;
  const tombolWidth = tombolNo.offsetWidth;
  const tombolHeight = tombolNo.offsetHeight;

  const newX = Math.floor(Math.random() * (wrapperWidth - tombolWidth));
  const newY = Math.floor(Math.random() * (wrapperHeight - tombolHeight));

  tombolNo.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Deteksi device
if (window.innerWidth > 600) {
  // Desktop → tombol lari saat hover
  tombolNo.addEventListener('mouseover', gerakRandomDesktop);
} else {
  // Mobile → tombol lari saat tap/click
  tombolNo.addEventListener('touchstart', gerakRandomMobile);
  tombolNo.addEventListener('click', gerakRandomMobile);
}

// Kalau klik "Mauu"
tombolYes.addEventListener('click', () => {
  window.location.href = 'halaman-yes.html';
});
