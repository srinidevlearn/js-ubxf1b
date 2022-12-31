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

function createParagraph(
  className = null,
  id = null,
  content = '',
  flag = 'asText'
) {
  const p = document.createElement('p');
  if (className) p.setAttribute('class', className);
  if (id) p.setAttribute('id', id);
  if (content) {
    if (flag === 'asText') p.innerText = content;
    if (flag === 'asHTML') p.innerHTML = content;
  }
  return p;
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
const createCard = createDiv('card border-primary bg-light');
const createCardBody = createDiv('card-body');
const createImgCard = createImg('card-img-top', null, '100%', 175, imgSrc);
const para = createParagraph(null, null, 'Hello world', 'asText');
let intervalCapture = 0;
let timeOutCapture = 0;
// one way
// const data = para.innerHTML;
// const dataSplit = data.split(' ');
// let temp = dataSplit.map((item, index) => {
//   if (index === dataSplit.length - 1)
//     return `<span class="bg-primary p-2">${item}</span>`;
//   else return item;
// });

// para.innerHTML = temp.join('');

// other way

const para2 = createParagraph(
  null,
  'dynamicContructedPara',
  'Hello <span class="bg-primary p-2">World</span>',
  'asHTML'
);

createCardBody.appendChild(createDiv().appendChild(para2));

// // update
// intervalCapture = setInterval(() => {
//   console.log(para2);
//   para2.innerHTML = new Date().getTime();
// }, 2 * 1000);

// timeOutCapture = setTimeout(() => {
//   clearInterval(intervalCapture);
//   document.querySelector('#dynamicContructedPara').innerHTML = '';
// }, 10 * 1000);

createCard.appendChild(createImgCard);
createCard.appendChild(createCardBody);
createContainer.appendChild(createCard);
createContainer.setAttribute('style', 'display:none');
appDiv.appendChild(createContainer);

// setTimeout(() => {
//   console.log('executed');

//   // to remove child from existing node
//   appDiv.removeChild(document.querySelector('#container'));
// }, 20 * 1000);
// not working due to stackblitz online editor tool
window.addEventListener('DOMContentLoaded', () => {
  // console.clear();
  //.addEventListener('change', (e) => console.log);
});

validForms('input#validationServer01');
validForms('input#validationServer02');
validForms('input#validationServer03');
validForms('select#validationServer04');
validForms('input#validationServer05');
/**
 * input
 * keyup
 * keypress
 * click
 * mouseover
 * mousein
 * mouseout
 * change
 * blur
 * focus
 */

function validForms(selector) {
  const input = document
    // .querySelector('input#validationServer01')
    .querySelector(selector);

  if (input) {
    const feedBack = document.querySelector('' + selector + ' ~ div');
    let temp = selector.split('#')[1];
    const label = document.querySelector(`[for="${temp}"]`);

    input.value = '';
    input.setAttribute('class', 'form-control');
    input.addEventListener('blur', (e) => {
      console.log(e.target.value);
      if (e.target.value.length > 0) {
        input.classList.add('is-valid');
      }
      if (!e.target.value) {
        input.classList.add('is-invalid');
      }

      if (e.target.value.length > 0) {
        input.classList.add('is-invalid');
      }
      console.log(e.target.value);
      if (e.target.value === '') {
        input.classList.replace('is-valid', 'is-invalid');
        feedBack.classList.replace('valid-feedback', 'invalid-feedback');
        feedBack.innerHTML = 'Wrong Input';
      } else {
        input.classList.replace('is-invalid', 'is-valid');
        feedBack.classList.replace('invalid-feedback', 'valid-feedback');
        feedBack.innerHTML = 'Looks Good';
      }
    });
  }
}
