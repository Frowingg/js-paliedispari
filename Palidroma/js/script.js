// mi faccio dare una parola dall'utente e controllo se è palindroma

const userWord = prompt('dammi una stringa');
const word = userWord.replace(/\s+/g, '').toLowerCase();
let newWord = '';

function isPalindrome(word) {

    for(let i = word.length -1; i>=0; i--) {
        newWord += word[i];
    }
    if (word === newWord) {
        return 'è palidroma';
    } else {
        return 'non è palindroma';
    }

}


const output = isPalindrome(word);
console.log('output', output)
