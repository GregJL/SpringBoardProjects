const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
//Step 1: Add Brutus to the beginning of the guest list
guests.unshift("BRUTUS");
//Question 1: How can you verify that "BRUTUS" was added to the beginning of the array?
//Answer 1: You can verify that "BRUTUS" was added to the beginning of the array by logging the array to the console and checking the first element.
console.log(guests);
//Step 2: Add Augustus and Lucia to the end of the guest list
guests.push("AUGUSTUS", "LUCIA");
//Step 3: Check to see if Spartacus is on the guest list and where he is in the list.
const spartacusIndex = guests.indexOf("SPARTACUS");
//Question 2: What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
//Answer 2: If "SPARTACUS" wasn't invited, the value of spartacusIndex would be -1.
//Step 4: Remove "CASSIUS" from the guest list
guests.splice(guests.indexOf("CASSIUS"), 1);
//Step 5: Extract the first three guests in the list and store them in a new array called firstThreeGuests
const firstThreeGuests = guests.slice(0, 3);
//Step 6: Sort the guest list in alphabetical order, but keep the most honored guest (the one added first) at the beginning of the list
const mostHonoredGuest = guests.slice(0,1);
const otherGuests = guests.slice(1);
otherGuests.sort();
const sortedGuests = mostHonoredGuest.concat(otherGuests);