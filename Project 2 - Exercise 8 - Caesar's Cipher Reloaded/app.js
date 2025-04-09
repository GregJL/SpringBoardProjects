const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//Step 1: Create letter encryption function
function encryptLetter (letter, shiftValue) {
  const letterIndex = alphabet.indexOf(letter.toLowerCase());
  const encryptedIndex = (letterIndex + shiftValue) % alphabet.length;
  return alphabet[encryptedIndex];
}

//Step 2: Create message encryption function
function encryptMessage (word, shiftValue) {
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++) {
    encryptedMessage += encryptLetter(word[i], shiftValue);
  }
  return encryptedMessage;
}

//Step 3: Create decryption function
function decryptLetter (letter, shiftValue) {
  const letterIndex = alphabet.indexOf(letter.toLowerCase());
  const decryptedIndex = (letterIndex - shiftValue + alphabet.length) % alphabet.length;
  return alphabet[decryptedIndex];
}

//Step 4: Create message decryption function
function decryptMessage (word, shiftValue) {
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++) {
    decryptedMessage += decryptLetter(word[i], shiftValue);
  }
  return decryptedMessage;
}
//Question: If Caesar encrypts the word "BRUTUS" using our encryptMessage function 
// and then decrypts the result using our decryptMessage function, will he get "BRUTUS" back? Why or why not?
//Answer: Yes, he will get "BRUTUS" back because the shift value is the same for both encryption and decryption.
// The shift value is 3, so the encrypted message will be "EUXWXV" and the decrypted message will be "BRUTUS".
//However, it will be in lowercase because the encryptLetter and decryptLetter functions take the letters from alphabet, which is in lowercase.
const encryptedFriend = encryptMessage(friend, shiftValue);
console.log(encryptedFriend);
const decryptedFriend = decryptMessage(encryptedFriend, shiftValue);
console.log(decryptedFriend);