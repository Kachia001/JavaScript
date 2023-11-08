// let tabButtons = document.querySelectorAll('.tab-button');
// tabButtons[0].addEventListener('click', ()=>change(0));
// tabButtons[1].addEventListener('click', ()=>change(1));
// tabButtons[2].addEventListener('click', ()=>change(2));
// function change(number) {
//   document.getElementsByClassName('tab-button')[0].classList.remove('orange');
//   document.getElementsByClassName('tab-button')[1].classList.remove('orange');
//   document.getElementsByClassName('tab-button')[2].classList.remove('orange');
//   document.getElementsByClassName('tab-button')[number].classList.add('orange');
//   document.getElementsByClassName('tab-content')[0].classList.remove('show');
//   document.getElementsByClassName('tab-content')[1].classList.remove('show');
//   document.getElementsByClassName('tab-content')[2].classList.remove('show');
//   document.getElementsByClassName('tab-content')[number].classList.add('show');
// };


// let car = ['sonata', 50000, 'white'];
// let car2 = {name : 'sonata', price : [50000, 3000, 4000]};
// document.getElementsByClassName('product')[0].innerHTML = car2.name;
// document.getElementsByClassName('product')[1].innerHTML = car2['price'][0];

let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

function target(a, b) {
  return document.getElementsByClassName(a)[b].innerHTML
}

function price(a) {
  document.getElementsByClassName('price')[a].innerHTML = '가격 : ' + products[a].price;
  document.getElementsByClassName('title')[a].innerHTML = products[a].title;
}
for (let i=0; i<3; i++) {
  price(i);
}
document.getElementsByClassName('form-select')[0].addEventListener('change', ()=>{
  if(document.getElementsByClassName('form-select')[0].value == '셔츠') {
  document.getElementsByClassName('form-select')[1].classList.remove('hidden');
  } else {
    document.getElementsByClassName('form-select')[1].classList.add('hidden');
  }
})

