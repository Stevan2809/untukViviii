const tombolNo = document.getElementById('tombol-no');
const tombolYes = document.getElementById('tombol-yes');
const tombolWrapper = document.querySelector('.tombol-wrapper');

// Efek tombol "Ga Mau" lari-lari hanya di layar besar
function aktifkanGerakan() {
  tombolNo.addEventListener('mouseover', () => {
    const wrapperWidth = tombolWrapper.offsetWidth;
    const wrapperHeight = tombolWrapper.offsetHeight;
    const tombolWidth = tombolNo.offsetWidth;
    const tombolHeight = tombolNo.offsetHeight;

    const newX = Math.floor(Math.random() * (wrapperWidth - tombolWidth));
    const newY = Math.floor(Math.random() * (wrapperHeight - tombolHeight));

    tombolNo.style.transform = `translate(${newX}px, ${newY}px)`;
  });
}

if (window.innerWidth > 600) {
  aktifkanGerakan();
}

tombolYes.addEventListener('click', () => {
  window.location.href = 'halaman-yes.html';
});