/* Generic light‑box logic – extracted from people.html, product.html, etc. */
let currentCarouselIndex = 0;
let currentImageIndex = 0;

/**
 * carousels[] is injected by gallery.js for each page:
 *   const carousels = [ ['Lorraine_1.jpg', 'Lorraine_2.jpg'], ... ];
 */
function openCarousel(setIndex, imgIndex = 0){
  currentCarouselIndex = setIndex;
  currentImageIndex   = imgIndex;
  document.getElementById('carousel').style.display = 'flex';
  showMedia(carousels[setIndex][imgIndex]);
}
function closeCarousel(){
  document.getElementById('carousel').style.display = 'none';
}
function changeImage(dir){
  const images = carousels[currentCarouselIndex];
  currentImageIndex = (currentImageIndex + images.length + dir) % images.length;
  showMedia(images[currentImageIndex]);
}
function showMedia(src){
  const img  = document.getElementById('carouselImage');
  const vid  = document.getElementById('carouselVideo');
  if(src.endsWith('.mp4')){
    vid.src = src;   vid.style.display='block';
    img.style.display='none'; img.removeAttribute('src');
  }else{
    img.src = src;   img.style.display='block';
    vid.style.display='none'; vid.pause(); vid.removeAttribute('src');
  }
}
