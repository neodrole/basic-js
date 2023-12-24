const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(noreverse=true) {
    this.table = [['A','B','C','D','E','F',
      'G','H','I','J','K','L','M','N','O','P',
      'Q','R','S','T','U','V','W','X','Y','Z']];
    this.table[0].forEach((e, ind) => {
      this.table.push(this.table[0].slice(ind + 1, this.table[0].length));
      this.table[ind + 1].push(...this.table[0].slice(0,ind + 1));
    } )
    this.table.pop();
    this.reverse = !noreverse;
    //console.log(this.table);
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const keyRepeat = Math.ceil(message.length/key.length);
    let repeatedKey = key.repeat(keyRepeat);
    repeatedKey = repeatedKey.slice(0, message.length);
    //console.log(repeatedKey);
    repeatedKey = repeatedKey.toUpperCase();
    let upperMessage = message.toUpperCase();
    let res = [];
    let arrRepeatedKey = repeatedKey.split('');
    let arrUpperMessage = upperMessage.split('');
    let offset = 0;
    arrUpperMessage.forEach((e,ind) => {
      //console.log(this.table[0].indexOf(e), arrRepeatedKey[ind-offset]);
      if (this.table[0].includes(e)) {
        res.push(this.table[this.table[0].indexOf(e)][this.table[0].indexOf(arrRepeatedKey[ind-offset])]);
      } else {
        offset += 1;
        res.push(e);
      }
    });
    //console.log(res);
    if (this.reverse) {
      res.reverse();
    }
    return res.join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const keyRepeat = Math.ceil(message.length/key.length);
    let repeatedKey = key.repeat(keyRepeat);
    repeatedKey = repeatedKey.slice(0, message.length);
    //console.log(repeatedKey);
    repeatedKey = repeatedKey.toUpperCase();
    let upperMessage = message.toUpperCase();
    let res = [];
    let arrRepeatedKey = repeatedKey.split('');
    let arrUpperMessage = upperMessage.split('');
    let offset = 0;
    arrUpperMessage.forEach((e,ind) => {
      //console.log(this.table[0].indexOf(e), arrRepeatedKey[ind-offset]);
      if (this.table[0].includes(e)) {
        //res.push(this.table[this.table[0].indexOf(e)][this.table[0].indexOf(arrRepeatedKey[ind-offset])]);
        res.push(this.table[0][this.table[this.table[0].indexOf(arrRepeatedKey[ind-offset])].indexOf(e)])
      } else {
        offset += 1;
        res.push(e);
      }
    });
    //console.log(res);
    if (this.reverse) {
      res.reverse();
    }
    return res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
