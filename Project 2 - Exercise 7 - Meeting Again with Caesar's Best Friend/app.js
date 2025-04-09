//Starting code
const friend = "BRUTUS"
const shiftValue = 3;
//Step 1 Recall the Latin alphabet variable from the previous exercise
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//Step 2 Use a loop to iterate through each letter of "BRUTUS". 
// Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.
let encryptedFriend = "";
for (let i = 0; i < friend.length; i++) {
  const caesarFriendFirstLetter = friend[i];
  const alphabetIndex = alphabet.indexOf(caesarFriendFirstLetter.toLowerCase());
  const shiftedIndex = alphabetIndex + shiftValue;
  const newShiftedIndex = shiftedIndex % alphabet.length;
  encryptedFriend += alphabet[newShiftedIndex];
}
//Question 1: What advantage does using a loop provide over manually encrypting each letter?
//Answer 1: Using a loop allows us to automate the process of encrypting each letter in the name. 
// This saves time and reduces the likelihood of errors when encrypting multiple letters.
//Question 2: Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?
//Answer 2: The % alphabet.length operation ensures that the shifted index remains within the bounds of the alphabet.
// If the shifted index exceeds the length of the alphabet, the modulo operation wraps it back to the beginning of the alphabet.
