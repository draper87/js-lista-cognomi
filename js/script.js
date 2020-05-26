// Chiedo all utente il suo cognome, do errore in caso non si inserisca nulla
var cognomeUtente = prompt('Inserire Cognome');

while (cognomeUtente.length == 0) {
  cognomeUtente = prompt('Errore. Inserire Cognome');
}

// Creo array con lista di cognomi
var arrayCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Creo il push per aggiungere elementi all array
arrayCognomi.push(cognomeUtente);

// Sistemo i cognomi per ordine alfabetico
var arrayCognomiOrdinati = arrayCognomi.sort();

// Creo accesso al DOM
var lista = document.getElementById('lista');
var posizione = document.getElementById('posizione');

// Stampo i cognomi in ordine alfabetico
for (var i = 0; i < arrayCognomiOrdinati.length; i++) {
  var listaDiAppoggio = lista.innerHTML;
  lista.innerHTML = listaDiAppoggio + '<li>' + arrayCognomiOrdinati[i] + '</li>';
  posizione.innerHTML = 'Il tuo cognome è il numero ' + (arrayCognomiOrdinati.indexOf(cognomeUtente) +1) + ' della lista';
}
