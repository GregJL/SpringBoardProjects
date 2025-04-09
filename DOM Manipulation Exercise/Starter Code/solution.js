// Task 1
const task1 = document.getElementById("task1");
task1.innerText = "I have changed the content of this element using JavaScript.";
// Task 2
const task2 = document.getElementById("task2");
task2.innerHTML = "<button>Click me</button>";  // This is a button element
// Task 3
const task3 = document.body;   // This is the body element
task3.style.backgroundColor = "#232323";
// Task 4
const task4 = document.querySelectorAll(".item");
for (let item of task4) {
    item.style.border = "1px solid black";
}
// Task 5
const task5 = document.getElementById("task5");
task5.href = "https://www.springboard.com/";
// Task 6
const task6 = document.getElementById("task6");
task6.value = "DOM Master";
// Task 7
const task7 = document.getElementById("task7");
task7.classList.add("new-class");
// Task 8
const task8 = document.createElement("button");
task8.textContent = "This is a new button element";
document.getElementById("task8").appendChild(task8); // Append the new button to the task8 element
// Task 9
const task9 = document.getElementById("task9");
task9.remove();  // Remove the task9 element