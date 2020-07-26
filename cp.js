// MENGUBAH WARNA DENGAN CARA SEDERHANA
// BUAT BUTTON
const button = document.createElement('button');
const isiButton = document.createTextNode('Ubah warna');
button.setAttribute('id', 'btn');
button.setAttribute('type', 'button');
button.appendChild(isiButton);
const h2 = document.getElementsByTagName('h2')[0];
h2.after(button);

// STYLE PADA BUTTON
button.style.backgroundColor = 'lightblue';
button.style.borderRadius = '15px';
button.style.borderColor = 'lightblue';
button.style.padding = '10px';
button.style.margin = '10px';
button.style.display ='none';
// FUNCTION UNTUK MENGUBAH WARNA BODY
button.onclick = function() {
  // document.body.style.backgroundColor = 'lightblue';
  document.body.classList.toggle('warnaBody');
}

// FUNCTION UNTUK MENGUBAH WARNA BODY MENJADI WARNA RANDOM
// RGB VALUE
const value = document.querySelector('.hasil h4 span');
const buttonDua = document.createElement('button');
const textBtnDua = document.createTextNode('RANDOM COLOUR');
buttonDua.setAttribute('type', 'button');
buttonDua.appendChild(textBtnDua)
button.after(buttonDua); // after gunanya membuat posisi buttonDua berada setelah button

// STYLE PADA BUTTON
buttonDua.style.backgroundColor = 'black';
buttonDua.style.borderRadius = '15px';
buttonDua.style.borderColor = 'black';
buttonDua.style.padding = '20px';
buttonDua.style.margin = '10px';
buttonDua.style.fontFamily = 'Bebas Neue, cursive';
buttonDua.style.letterSpacing = '5px';
buttonDua.style.color = 'white';
buttonDua.style.fontSize = '18px';

buttonDua.addEventListener('click', function() {
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
  value.innerHTML = r +', '+ g +', '+ b;
});

// SLIDER
const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function() { // event input untuk melihat value secara intime
  const r = sMerah.value; // mengambil value pada sebuah element
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b
  value.innerHTML = r +', '+ g +', '+ b;
});

const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
  value.innerHTML = r +', '+ g +', '+b;
});

const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
  value.innerHTML = r +', '+ g +', '+b;
});

// MERUBAH WARNA SESUAI DENGAN POSISI MOUSE TERHADAP BODY
//  document.body.addEventListener('mouseover', function(event) {
//   // posisi mouse
//   // event.clientX (horizontal)
//   // event.clientY (vertikal)
//   // ukuran browser
//   // window.innerWidth
//   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((event.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';
// });
