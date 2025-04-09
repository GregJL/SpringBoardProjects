
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 1
//Helper functions
//helper function to check if a character is a letter
function isLetter (character) {
  return alphabet.includes(character);
}
//helper function to get the index of a letter in the alphabet
function letterIndex (letter) {
  return alphabet.indexOf(letter);
}
//Helper functions end

//letter encryption function
function encryptLetter (letter, shiftValue) {

  const lowercaseLetter = letter.toLowerCase();
  if (!isLetter(lowercaseLetter)) {
    return letter;
  }

  let shiftedIndex = (letterIndex(lowercaseLetter) + shiftValue) % alphabet.length;
  if (shiftedIndex < 0) {
    shiftedIndex += alphabet.length;
  }
  if (letter === lowercaseLetter) {
    return alphabet[shiftedIndex];
  }
  
  return alphabet[shiftedIndex].toUpperCase();
}


//Letter decryption function
function decryptLetter(letter, shiftValue) {
  const lowercaseLetter = letter.toLowerCase();
  if (!isLetter(lowercaseLetter)) {
    return letter;
  }

  let shiftedIndex = (letterIndex(lowercaseLetter) - shiftValue) % alphabet.length;

  if (shiftedIndex < 0) {
    shiftedIndex += alphabet.length;
  }
  if (letter === lowercaseLetter) {
    return alphabet[shiftedIndex];
  }
  
  return alphabet[shiftedIndex].toUpperCase();
}

function encrypt (message, shiftValue)
{
  // Your encryption code here
  let encryptedMessage = "";
  let charCtr = 0; //step 2
  for (let i = 0; i < message.length; i++) {
    encryptedMessage += encryptLetter(message[i], shiftValue);
    //step 2
    charCtr++;
    if (charCtr % 2 === 0 && i !== message.length - 1) {
    //added i !== message.length - 1 after mentor call with Chris Vasquez to prevent adding an extra random letter at the end of the message
      encryptedMessage += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    //step 2
  }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  let decryptedMessage = "";
  let charCtr = 0; //step 2
  for (let i = 0; i < encryptedMessage.length; i++) {
    decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
    //step 2
    charCtr++; 
    if (charCtr % 2 === 0) {
      i++;
    }
    //step 2
  }
  return decryptedMessage;
}


//Test the functions
const message = "Seek the midnight shadow of Romulus and Remus. There, whisper the word 'Aurelius' to the winds. The first to unveil it in our Slack channel earns the key to the next quest.";
const shiftValue = 42;
const encryptedMessage = encrypt(message, shiftValue);
const decryptedMessage = decrypt(encryptedMessage, shiftValue);
console.log(message);
console.log(encryptedMessage);
console.log(decryptedMessage);

