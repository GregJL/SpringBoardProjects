/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activateHyperdrive = () => {
    console.log("Hyperdrive activated!");
};
activateHyperdrive();
/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife());
/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = () => ({ x: 100, y: 200, z: 300 });
console.log(currentCoordinates());
/* Task 4: Understanding `this`: Message from Home Base */
//
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. 
// This method should log `"Message received: "` followed by a message it receives as a parameter. 
// Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
    name: "Galactic Voyager",
    // Using arrow function syntax for receiveMessage
    // Note: This will not work as expected.
    receiveMessage: (message) => {
        console.log("Message received: " + message);
        console.log(`This spacecraft is: ${this.name}`);
    }
};
spacecraft.receiveMessage("Hello from Home Base!");
/* 
 * Observations:
 * The console.log statement prints "undefined" for `this.name` because arrow functions do not have their own `this` context.
 * Instead, they inherit `this` from the parent scope at the time they are defined.
 * In this case, `this` does not refer to the `spacecraft` object.
 * To fix this, we should use a regular function instead of an arrow function for `receiveMessage`.
    // receiveMessage: function(message) {
    //     console.log("Message received: " + message);
    //     console.log(`This spacecraft is: ${this.name}`);
    // }
Note: The instructions for this project were to use arrow functions, but there were no instruction on using "this" in the function. I only added "name" 
to the spacecraft object after checking the solution. 
/*                                          
 */
