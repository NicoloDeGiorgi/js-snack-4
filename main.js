use strict';

// lista invitati
const invitati = ['Pippo', 'PLUTO', 'pAperino'];

//se non ti conosco non si può partecipare
let invitato = false;

//chiedo il nome della persona per verifica
const input = prompt('Inserisci il tuo nome');


//controllo se la persona è invitata
for (let i = 0; i < invitati.length; i++) {

    const currentValue = invitati[i].toLowerCase();
    const checkValue = input.toLowerCase();

    //se è invitato, lo dichiaro einterrompo il ciclo
    if (currentValue === checkValue) {
        invitato = true;
        // break;
    }
}

//stampo il messaggio finale
if (invitato === true) {
    console.log('puoi partecipare alla festa');
} else {
    console.log('non puoi partecipare alla festa');
}