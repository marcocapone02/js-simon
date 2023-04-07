let output = document.querySelector('.output');
console.log(output)

let array = [];

function randomNumbers(){
  let b = Math.floor( Math.random() * 100 )-1
  return b
}

output.innerHTML = 'Memorizza i seguenti numeri:';
for (i=0; i<5; i++) {
  let numRandom = randomNumbers();
  array.push(numRandom);

  output.innerHTML += ` ${numRandom}`;
}

console.log(array)
let time = setTimeout( function(){  

  output.innerHTML = '';
},5000 )

let out = setTimeout( function(){
  validation = [];
  validation.push(parseInt(prompt('Inserisci un numero che ricordi')));
  validation.push(parseInt(prompt('Inserisci un numero che ricordi')));
  validation.push(parseInt(prompt('Inserisci un numero che ricordi')));
  validation.push(parseInt(prompt('Inserisci un numero che ricordi')));
  validation.push(parseInt(prompt('Inserisci un numero che ricordi')));
  
  let which = [];
  for (i=0; i<5; i++) {
  if (array[i] == validation[i])
  which.push(array[i])
}

let amount = which.length;
if(amount = which.length) {
output.innerHTML = `Hai indovinato ${amount} numeri: ${which}`;
}else{
  output.innerHTML = 'Riprova!';
}

},6000)