// chiedi quanti km deve percorrere
var km = prompt ('Inserisci quanti KM devi fare');
console.log(km + 'km da fare');

//chiedi quanti anni
var age = prompt ('Inserisci la tua età');
console.log(age + 'anni');

var prezzo_per_km = 0.21;

//calcolo del prezzo intero
var prezzo_ticket = km * prezzo_per_km;
console.log(prezzo_ticket + '€');

//sconto del 20% per under 18
var discount_under_18 = (prezzo_ticket * 20) / 100;
console.log(discount_under_18);

//sconto del 40% per over 65
var discount_over_65 = (prezzo_ticket * 40) / 100;
console.log(discount_over_65);

//applicazione sconti

if (age >= 65) {
    var prezzo_finale = prezzo_ticket - discount_over_65;
    console.log('devi pagare' + prezzo_finale);
} else if (age < 18){
    var prezzo_finale = prezzo_ticket - discount_under_18;
    console.log('devi pagare' + prezzo_finale);
} else {
    console.log('devi pagare' + prezzo_ticket);
}
