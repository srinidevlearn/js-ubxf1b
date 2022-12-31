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
console.log(selectAllDiv);

//Why powerfull ?

const powerFullSelector = document.querySelector(
  'div#container  div.card-body img'
);
console.log(powerFullSelector);

const powerFullSelectorOnWhole = document.querySelectorAll('div');
console.log(powerFullSelectorOnWhole);
