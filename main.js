console.log('JS-OK')
/* 
0. colleghiamo elemento dal DOM
1. chiediamo i dati all'utente 
2. calcola il prezzo totale del viaggio
    - 0.21€ al km
    - sconto 20% ai minorenni
    - sconto 40%  over 65
*/

const outname = document.getElementById('outname');
const button = document.getElementById('button');
const inputkm = document.getElementById('km');
const inputnome = document.getElementById('nome');
const inputeta= document.getElementById('età');
const outofferta = document.getElementById('offerta');
let discount = null;

button.addEventListener('click', function(){
    const km = inputkm.value;
    const nome= inputnome.value;
    const eta= inputeta.value; 
    outname.innerText= nome;

    const fullprice= km * 0.21;
    console.log(fullprice);

    if ( eta = minorenne ) discount = 20;

}
)










