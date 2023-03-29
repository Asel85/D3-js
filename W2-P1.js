/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let num1 = 3;
let num2 = 5;
if (num1 > num2){
  console.log(num1);
}else{
  console.log(num2);
}*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let num = 5;
if(num !== 5){
  console.log("not equal");
}else{
  console.log("il numero è 5");
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let num = 20;
if(num%5 === 0){
  console.log("il numero è divisibile per 5");
}else{
  console.log("il numero non è divisibile per 5");
}*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/*let num1 = 16;
let num2 = 8;

if((num1 === 8 || num2 === 8)||(num1 + num2 === 8||num1 - num2 === 8)){
  console.log("uno dei due numeri è = a 8 oppure la loro addizione sottrazione è uguale a 8");
}else{
  console.log("nessun delle condizioni è soddisfatta");
}*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/*let totalShopingCart = 50;
let costoSpedizione = 10;
let saldoTotale;
if(totalShopingCart > 50){
  saldoTotale = totalShopingCart;
  console.log(saldoTotale);
  console.log(" NONdevi pagare la spedizione");
}else{
  saldoTotale = totalShopingCart + costoSpedizione;
  console.log("devi pagare la spedizione");
}*/




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*let totalShopingCart = 50;
let costoSpedizione = 10;
let saldoTotale;
let blackFriday = totalShopingCart * 0.8;

if(blackFriday > 50){
  saldoTotale = blackFriday; 
  console.log(" non devi pagare la spedizione");
  console.log("questo è il tuo saldo totale scontato " + blackFriday);
  console.log("questo il tuo saldo totale " + saldoTotale);
}else{
  saldoTotale = blackFriday + costoSpedizione;

  console.log("questo è il tuo saldo totale scontato " + blackFriday);
  console.log("devi pagare la spedizione");
  console.log("questo il tuo saldo totale " + saldoTotale);
}*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*let num1 = 4;
let num2 = 8;
let num3 = 16;


if((num1 < num2) && (num2 < num3)){
 // console.log(num1 + " è un numero piu piccolo")
} else if((num2 > num1) && (num3 > num2)){
  console.log(num3 + " è un numero piu grande");
}else{
  console.log("ho sbagliato");
}*/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*let num = 6;
if(typeof num === "number"){
  console.log(" è un numero");
}else{
  console.log( " NON è un numero");
}*/
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let num = 11;
if(num %2 === 0){
  console.log(" Numero pari");
}else{
  console.log("Numero dispari");
}*/

/*ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  /*let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/


/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
/*let num = 3;
if(num < 5){
  console.log("Tiny");
}else if(num < 10){
  console.log("Small");
}else if(num < 15){
  console.log("Medium");
}else if(num < 20){
  console.log("Large");
}else if(num >=20){
  console.log("Huge");
}else{
  console.log("non e stato inserito alcun numero");
}*/


/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
/*let isMale;
let gender = isMale ? "male":"female" ;
console.log(gender);
*/


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/*let num = 0;
while (num < 5 ){
  num++;
  console.log(num);
}*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/


/*for(let num = 0;num <= 10; num++){
  console.log(num);
}*/


/* ESERCIZIO 15

  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
/*for (let i = 0; i <= 10; i++){
  if(i===3 || i===8){
    continue;
  }
  console.log(i);
}*/



/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
/*for (let i = 0; i < 15; i++){
  
  if(i %2=== 0){
    console.log(i + " pari");
  }else{
   console.log(i + " dispari");
  }
  //console.log(i);
}*/


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*for (let i = 1; i < 100; i++ ){
  if(i %3=== 0){
  console.log(i + " Fizz");
  }else if(i %5=== 0){
    console.log(i + " Buzz");
  }else if((i %3=== 0) && (i %5=== 0)){
    console.log(i + " FizzBuzz");
  }
  
}*/

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/*let day = 1;
switch(day){
  case 1:
    console.log("lunedì");
    break;
  case 2:
    console.log("martedì");
    break; 
  case 3:
    console.log("mercoledì");
    break;
  case 4:
    console.log("giovedì");
    break;
  case 5:
    console.log("venerdì");
    break;
   case 6:
     console.log("sabato");
     break;
   case 7:
    console.log("domenica");
    break;
    default:
      console.log("Valore non valido,inserisci un numero da 1 a 7.");
}*/
