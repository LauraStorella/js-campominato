/* GAME: CAMPO MINATO

Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50 */


// INPUT
// Richiesta input pc (16 numeri casuali tra 1 e 100)
var arrPcNumbers = [];

// Funzione: creo array pc 16 numeri random
function getPcRandomNumbers() {
  while(arrPcNumbers.length <= 4){
    var pcNumber = Math.floor(Math.random() * 100) + 1;
    if(arrPcNumbers.indexOf(pcNumber) === -1) arrPcNumbers.push(pcNumber);
  }
}
getPcRandomNumbers();
console.log(arrPcNumbers);


// Richiesta input User (16 numeri casuali tra 1 e 100)
var arrUserNumbers = [];

for (var i = 0; i <= 4; i++) {
  arrUserNumbers.push(parseInt(prompt('Inserisci un numero da 1 a 100')));
}


// Funzione: creo array user 16 numeri random
function getUserRandomNumbers() {
  while(arrUserNumbers.length <= 4){
    var userNumber = Math.floor(Math.random() * 100) + 1;
    if(arrUserNumbers.indexOf(userNumber) === -1) arrUserNumbers.push(userNumber);
  }
}
getUserRandomNumbers();
console.log(arrUserNumbers);


// Confronto array pc - user
for (var i = 0; i < arrPcNumbers.length; i++) {
  if (arrPcNumbers[i] == arrUserNumbers[i]) {
    console.log('Game Over!');
  }
}
