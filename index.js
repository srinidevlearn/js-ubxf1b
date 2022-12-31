// Import stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>DOM Starter</h1>`;

const containerClass = document.getElementsByClassName('container');

console.log(containerClass);

const containerById = document.getElementById('container');
console.log(containerById);

const selectAllDiv = document.getElementsByTagName('div');
console.log('selectAllDiv', selectAllDiv);

// Why powerfull ?
// reason we can use combinators

const powerFullSelector = document.querySelector('div#container  div.card img');
console.log('powerFullSelector', powerFullSelector);

const powerFullSelectorOnWhole = document.querySelectorAll('div');
console.log(powerFullSelectorOnWhole);

const containerByIdByCard = containerById.getElementsByClassName('card');

//bad code
// Array.from(containerByIdByCard).forEach((i) => {
//   var d = i.getElementsByTagName('img');
//   Array.from(d).forEach((itm) => {
//     console.log(itm);
//   });
// });

// create

function createDiv(className = null, id = null) {
  const div = document.createElement('div');
  if (className) div.setAttribute('class', className);
  if (id) div.setAttribute('id', id);
  return div;
}

function createImg(
  className = null,
  id = null,
  width = 0,
  height = 0,
  src = ''
) {
  const img = document.createElement('img');
  if (className) img.setAttribute('class', className);
  if (id) img.setAttribute('id', id);
  if (width) img.setAttribute('width', width);
  if (height) img.setAttribute('height', height);
  if (src) img.setAttribute('src', src);

  return img;
}

const imgSrc =
  'https://images.pexels.com/photos/449520/pexels-photo-449520.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=75&amp;w=75';

const createContainer = createDiv('container', 'container');
const createCard = createDiv('card');
const createCardBody = createDiv('card-body');
const createImgCard = createImg('card-img-top', null, '100%', 175, imgSrc);

createCard.appendChild(createImgCard);
createCard.appendChild(createCardBody);
createContainer.appendChild(createCard);

appDiv.appendChild(createContainer);
