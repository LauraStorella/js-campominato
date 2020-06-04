/* GAME: CAMPO MINATO

Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50 */



// ********** VARIABILI Opzioni Gioco **********
var rangeMaxNumeri = 100;
var numeroBombe = 16;

// INPUT
// Il computer genera 16 numeri casuali tra 1 e 100.
// --> Array 16 numeri (bombe campo minato)
var arrayBombe = creaArrayBombe(rangeMaxNumeri, numeroBombe );

// Var per n° max tentativi inseriti da Utente (differenza Range max numeri - Numero bombe)
var numMaxTentativi = rangeMaxNumeri - numeroBombe;

console.log(arrayBombe);
console.log(numMaxTentativi);



// ********** LOGICA **********
// WHILE Loop
// Richiesta immissione di un numero all Utente ad ogni ciclo while
//    While va avanti finchè:
//    --> Utente scrive numero "bomba" (numero presente in array)
//    --> Utente inserisce numero max di tentativi (differenza Range max numeri - Numero bombe)

// numImmissioniUtente è contatore per num tentativi fatti dall'utente
var numImmissioniUtente = 0;      //punteggio
var bombaBeccata = false;

while ( ( bombaBeccata === false ) && (numImmissioniUtente < 5) ) {    // TODO: cambia 5 in numMaxTentativi
  var numUtente = parseInt(prompt('Inserisci un numero da 1 a ' + rangeMaxNumeri));
  numImmissioniUtente++;

  // Se utente becca bomba, loop si ferma
  // Utente becca bomba quando il numero inserito si trova in arrayBombe
  if ( ctrlSeElementoInArray(numUtente, arrayBombe) === true ) {
    bombaBeccata = true;
  }

}



// ********** OUTPUT **********
// Display messaggio finale Utente
//    -->'Bravo, hai vinto!'
//    -->se pesca bomba 'Boom, hai perso! Il tuo punteggio è [x]'



// ********** FUNZIONI **********

// FUNZIONE CreaArrayBombe
// Crea un array di bombe
//   --> rangeMaxNumeri: numero intero che rappresenta range max di numeri da creaArrayBombe
//   --> numeroBombe: numero intero che rappresenta numero di bombe da inserire in array
//   --> return: array contenente numeri 'bomba'
function creaArrayBombe(rangeMaxNumeri, numeroBombe) {

  var numeriBombeArray = [];

  /* Ciclo che generi 16 numeri casuali da appendere all'array
      solo se numero non è già incluso nell'array */
  // WHILE Loop va avanti finchè:
  //   --> array numeriBombeArray contiene 16 numeri (tutti diversi, no ripetizioni)

  while (numeriBombeArray.length < numeroBombe) {
    var numeroCasuale = Math.floor(Math.random() * ( rangeMaxNumeri - 1 )) + 1;

    if (ctrlSeElementoInArray(numeroCasuale, numeriBombeArray) === false) {
      numeriBombeArray.push(numeroCasuale);
    }
  }
  return numeriBombeArray;
}


// FUNZIONE ctrlSeElementoInArray
// Verifica se un elemento è presente nell'array
// Attenzione!: Verifica è fatta in senso stretto, perciò '10' è diverso da 10
//   --> elemento: elemento da verificare (numero o stringa)
//   --> listaArray: array in cui potrebbe trovarsi l'elemento
//  --> return: boolean (true se elemento in array, altrimenti false)
// Opzione2: JS in-built function '.includes'
function ctrlSeElementoInArray(elemento, listaArray) {
  var inArray = false;

  // Scorro array e controllo elementi per cercare eventuale elemento ripetuto
  // Se trovo elemento ripetuto, var inArray diventa true
  for (var i = 0; i < listaArray.length; i++) {

    if (elemento === listaArray[i]) {
      inArray = true;

    }
  }
  return inArray;
}
