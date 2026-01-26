import { images } from './data/street.js';

let current = 0;
const imgEl = document.getElementById('carouselImage');

function show(idx){
  current = (idx + images.length) % images.length;
  imgEl.src = images[current];
}
window.changeImage = dir => show(current + dir);

window.addEventListener('load', () => show(0));
