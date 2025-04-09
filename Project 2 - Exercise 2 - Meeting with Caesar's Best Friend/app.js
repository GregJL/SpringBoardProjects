//Question Why is it important to be careful when using == (double equals) instead of === (triple equals) in our conditionals?
//Answer: When using ==, JavaScript will try to convert the values to the same type before making the comparison. This can lead to unexpected results if the types are not the same. 
//For example, the string "1" will be equal to the number 1 when using ==, but not when using ===. 
// To avoid these unexpected results, it is important to use === to ensure that the types are the same before making the comparison.
//Step 1
const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//Step 2
const caesarFriendFirstLetter = friend[0];
const alphabetIndex = alphabet.indexOf(caesarFriendFirstLetter.toLowerCase());
//Step 3
const shiftedIndex = alphabetIndex + shiftValue;
const shiftedLetter = alphabet[shiftedIndex];
//Sstep 4
const alphabetLength = alphabet.length;
//Step 5
const newShiftedIndex = shiftedIndex % alphabetLength;
const newShiftedLetter = alphabet[newShiftedIndex];
//Step 6
const encryptedMsg = "EUXWXV";
const teaseMsg = encryptedMsg.slice(0, 3);