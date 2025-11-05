const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(isDirect = true){
    this.isDirect = isDirect;
  }
  createTabulaRecta(){
    const alphabet = ['A',  'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X','Y', 'Z'];
    let tabulaRecta = [];
    for(let i=0; i<alphabet.length; i++){
      let tabulaRectaRow = [];
      for(let j=0; j<alphabet.length; j++){
        tabulaRectaRow.push(alphabet[(i+j)%alphabet.length]);
      }
      tabulaRecta.push(tabulaRectaRow);
    }
    return tabulaRecta;
  }
  encrypt(message, key) {
    // Remove line below and write your code here
    if(arguments.length < 2 || message === undefined || message === null || message === '' || key === undefined || key === null || key === '') {
      throw new Error('Incorrect arguments!');
    }
    let testMessage;
    if(this.isDirect){
      testMessage = message;
    }else{
      testMessage = message.split('').reverse().join('');
    }
    let strFromKey = '';
    let result = '';
    let tabulaRecta = this.createTabulaRecta();
    let alphabet = tabulaRecta[0];
    let upperMessage = testMessage.toUpperCase();
    for(let i=0; i<message.length; i++){
      strFromKey += (key[i%key.length]).toUpperCase();
    }
    let shift = 0;
    for(let i=0; i<strFromKey.length; i++){
      let messageLetter = upperMessage[i];
      let keyLetter = strFromKey[i-shift];
      let keyLetterIndex = alphabet.indexOf(keyLetter);
      let messageLetterIndex = alphabet.indexOf(messageLetter);
      if(messageLetterIndex < 0){
        result += messageLetter;
        shift++;
      }else{
        result += tabulaRecta[messageLetterIndex][keyLetterIndex];
      } 
    }
    return result;
  }

  decrypt(encryptedMessage, key) {
    // Remove line below and write your code here
        if(arguments.length < 2 || encryptedMessage === undefined || encryptedMessage === null || encryptedMessage === '' || key === undefined || key === null || key === '') {
      throw new Error('Incorrect arguments!');
    }
    let testEncryptedMessage;
    if(this.isDirect){
      testEncryptedMessage = encryptedMessage;
    }else{
      testEncryptedMessage = encryptedMessage.split('').reverse().join('');
    }
    let result = '';
    let tabulaRecta = this.createTabulaRecta();
    let alphabet = tabulaRecta[0];
    let strFromKey = '';
    for(let i=0; i<encryptedMessage.length; i++){
      strFromKey += (key[i%key.length]).toUpperCase();
    }
    let shift = 0;
    for(let i=0; i<encryptedMessage.length; i++){
      let encryptedMessageLetter = testEncryptedMessage[i];
      let keyLetter = strFromKey[i-shift];
      let keyLetterIndex = alphabet.indexOf(keyLetter);
      let row = tabulaRecta[keyLetterIndex];
      let encryptedMessageLetterIndex = row.indexOf(encryptedMessageLetter);
      if(encryptedMessageLetterIndex < 0){
        result += encryptedMessageLetter;
        shift++;
      }else{
        result += alphabet[encryptedMessageLetterIndex];
      }
    }
    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
