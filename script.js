console.log("JS OK");

// Chiedi all’utente il suo nome,
//     poi chiedi il suo cognome,
//         poi chiedi il suo colore preferito
// Infine scrivi sulla pagina e / o in console nomecognomecolorepreferito21

const Nome = prompt('Inserisci Nome: (Attenzione agli spazi)');
const Cognome = prompt('Inserisci Cognome: (Attenzione agli spazi)');
const ColorePref = prompt('Inserisci Colore Preferito (Attenzione agli spazi)');

let Password = Nome + Cognome + ColorePref + '21';

console.log(Password);

document.getElementById('Pswd').innerText = "La tua nuova Password è" + ' ' + Password;




