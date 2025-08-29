const gallery = document.getElementById('heroGallery');
const images = gallery.querySelectorAll('img');
images.forEach(img => {
  const clone = img.cloneNode(true);
  gallery.appendChild(clone);
});
// Optional: auto-scroll for demo
// setInterval(() => { gallery.scrollLeft += 1; }, 20);