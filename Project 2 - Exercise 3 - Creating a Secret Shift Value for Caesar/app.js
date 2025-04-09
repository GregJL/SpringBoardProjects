//Step 1
const shiftValueRandomizer = Math.random();
//Step 2
const shiftRange = 33 - 3 + 1;
//Question 1: Why did we add 1 to the difference between 33 and 3?
//Answer 1: We added 1 to the difference between 33 and 3 to make sure we include both endpoints of the range of 3 to 33.
//Step 3
const shiftInRangeDec = shiftValueRandomizer * shiftRange;
//Question 2: How does multiplying shiftValueRandomizer by shiftRange help us get a number within our desired range?
//Answer 2: Multiplying the shiftValueRandomizer (which is between 0 and 1) by the range scales the decimal to fall within the range of 0 to shiftRange. 
// So we will get a decimal number between 0 (including 0) and the value of shiftRange (excluding shiftRange), ensuring it fits in the desired range.
//Step 4
const shiftInRangeInt = Math.floor(shiftInRangeDec);
//Question 3: Why did we use Math.floor() on shiftInRangeDec?
//Answer 3: We used Math.floor() to round down the decimal number to the nearest integer. This ensures that the final value is an integer within the desired range.
//Step 5
const shiftValue = shiftInRangeInt + 3;

//Question 4: How does adding 3 to shiftInRangeInt ensure that our final shiftValue is between 3 and 33?
//Anser 4: We added 3 to shiftInRangeInt to shift the random value within the range of 3 to 33, as the Caesar cipher requires a shift value within this range.