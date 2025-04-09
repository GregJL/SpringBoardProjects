const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let location = "";
if (emblemClue1 === "Eagle") {
    location = "Forum";
}
else if (emblemClue1 === "Lion") {
    location = "Colosseum";
}
else 
{
    location = "Villa";
}
if (emblemClue2 === "Laurel" && location === "Forum") {
    location += " of Augustus";
}
else if (emblemClue2 === "Grapes" || location === "Villa")  {
    location += " of Pompey";
}
switch (emblemClue3) {
    case 7:
        location += " North";
        break;
    case 3:
        location += " South";
        break;
    case 9:
        location += " East";
        break;
    case 4:
        location += " West";
        break;
}
//Question Why is it important to be careful when using == (double equals) instead of === (triple equals) in our conditionals?
//Answer: When using ==, JavaScript will try to convert the values to the same type before making the comparison. This can lead to unexpected results if the types are not the same. 
//For example, the string "1" will be equal to the number 1 when using ==, but not when using ===. 
// To avoid these unexpected results, it is important to use === to ensure that the types are the same before making the comparison.
//This is the same question as in exercise 2. Is this an error or are you just making sure we're paying attention?