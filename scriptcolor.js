const btnV = document.querySelector('#btnV');
const btnA = document.querySelector('#btnA');
const btnVe = document.querySelector('#btnVe');
const div = document.querySelector('#div');

btnV.addEventListener('click', () => {
  div.style.backgroundColor = '#FF0000';
  div.style.width = '200px';
  div.style.height = '200px';
});
btnA.addEventListener('click', () => {
  div.style.backgroundColor = '#0000FF';
  div.style.width = '50px';
  div.style.height = '50px';
});
btnVe.addEventListener('click', () => {
  div.style.backgroundColor = '#00FF00';
  div.style.width = '150px';
  div.style.height = '150px';
});
