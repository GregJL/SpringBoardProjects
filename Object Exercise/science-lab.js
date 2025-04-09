/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. 
// Utilize shorthand property names to simplify your code.
let name = "Ashley";
let age = 37;
let studyField = "Party Science";
let participant = {
  name,
  age,
  studyField,
};
console.log(participant);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` 
// and a template string.
let participantWithMethod = {
  name,
  age,
  studyField,
  displayInfo() {
    console.log(`Participant Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
  },
};
participantWithMethod.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
let participantWithArrowMethod = {
  name,
  age,
  studyField,
  displayInfo: () => {
    console.log(`Participant Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
  },
};
participantWithArrowMethod.displayInfo();
/* Observations:
 * TODO: Explain here.
This will not work as expected because `this` does not refer to the object in arrow functions.
To fix this, we can use a regular function instead of an arrow function.
participantWithArrowMethod.displayInfo = function() {
  console.log(`Participant Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
};
participantWithArrowMethod.displayInfo();
Uncomment the above code to see the correct behavior with a regular function.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and 
// returns a new object with that property dynamically set.
function updateParticipantInfo(propertyName, value, obj) {
  return {
    ...obj,
    [propertyName]: value,
  };
}
let updatedParticipant = updateParticipantInfo("hobby", "Astronomy", participant);
console.log(updatedParticipant);
