console.log('JS-OK')
/* 
0. colleghiamo gli elementi della DOM
1. Agancio event listener al btn
1. calcola il prezzo totale del viaggio
    - 0.21€ al km
    - sconto 20% ai minorenni
    - sconto 40%  over 65
*/
const inputnome = document.getElementById('nome');
const inputkm = document.getElementById('km');
const inputeta = document.getElementById('eta');
const button = document.getElementById('button');

const outname=document.getElementById('outname');
const outofferta= document.getElementById('offerta');
const outprice= document.getElementById('prezzo');



button.addEventListener('click', function(){
    nome = inputnome.value;
    km = inputkm.value;
    eta = inputeta.value; 

    let fullprice = km * 0.21;
    let rateElement = 'Offerta base'
    outname.innerText= nome;
    let price= fullprice;
    
    if (eta ==='minorenne'){
        rateElement = 'Offerta giovani';
        price = fullprice * 0.8;
    }
    else if (eta ==='65+'){
        rateElement= 'Offerta anziani';
        price = fullprice * 0.6;
    }
    

    outofferta.innerText=rateElement;
    outprice.innerText= '€' + price.toFixed(2) ;


})










