// chiedi quanti km deve percorrere
var km = parseInt(prompt ('Inserisci quanti KM devi fare'));
console.log(km + 'km da fare');

//chiedi quanti anni ha
var age = parseInt(prompt ('Inserisci la tua età'));
console.log(age + ' anni ');

var prezzo_per_km = 0.21;

//calcolo del prezzo intero
var prezzo_ticket = km * prezzo_per_km;
console.log(prezzo_ticket + '€');

//sconto del 20% per under 18
var discount_under_18 = (prezzo_ticket * 20) / 100;

//sconto del 40% per over 65
var discount_over_65 = (prezzo_ticket * 40) / 100;

//applicazione sconti

if (!isNaN(age) && (!isNaN(km))) {
    console.log('è un numero');
    if (age >= 65) {
        var prezzo_finale = prezzo_ticket - discount_over_65;
        console.log('devi pagare ' + prezzo_finale + '€');
        document.getElementById('final-price').innerHTML = prezzo_finale.toFixed(2);
    } else if (age < 18){
        var prezzo_finale = prezzo_ticket - discount_under_18;
        console.log('devi pagare ' + prezzo_finale + '€');
        document.getElementById('final-price').innerHTML = prezzo_finale.toFixed(2);
    } else {
        var prezzo_finale = prezzo_ticket;
        console.log('devi pagare ' + prezzo_finale + '€');
        document.getElementById('final-price').innerHTML = prezzo_finale.toFixed(2);
    }

    document.getElementById('passenger_age').innerHTML = age;
    document.getElementById('km-to-do').innerHTML = km;
} else {
    console.log('non è un numero');
    alert('Inserisci un numero')
}
