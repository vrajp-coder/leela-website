import { images } from './data/megapixels.js';

const IMG_BASE = 'assets/img/';   // change if you move them into a sub‑folder
let current = 0;
const imgEl = document.getElementById('carouselImage');

function show(idx){
  current = (idx + images.length) % images.length;
  imgEl.src = IMG_BASE + images[current];
}
window.changeImage = dir => show(current + dir);

window.addEventListener('load', () => show(0));
