// gioco tra utente e computer
// faccio scegliere all'utente se pari o dispari e un numero da 1 a 5
// prendo poi un numero casuele tra 1 e 5 
// li sommo
// se il risultato è pari e l'utente aveva scelto pari ha vvinto sennò perde (stessa cosa se sceglie dispari)

const playerChoise = prompt('scegli tra pari o dispari')
const userNumber = parseInt(prompt('scegli un numero tra 1 e 5'))
const pcNumber = getRndInteger(1,5)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function evenOrOdd(num1, num2) {
    let sum = num1 + num2;
    if (sum % 2 === 0) {
        if (playerChoise === 'pari') {
            message = 'hai vinto'
        } else {
            message = 'hai perso'
        }
    } else {
        if (playerChoise === 'dispari') {
            message = 'hai vinto'
        } else {
            message = 'hai perso'
        }
    }
    return message
}

const output = evenOrOdd(userNumber, pcNumber)
console.log(output)

