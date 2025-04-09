document.addEventListener('DOMContentLoaded', function () {
    const newBoxBtn = document.querySelector('#new-box-button');
    const boxContainer = document.querySelector('#box-container');
    const colorForm = document.querySelector('#color-form');
    const colorInput = document.querySelector('#color-input');

    let boxColor = null; // Holds the selected box color from the form.
    let boxIdCtr = 0; // Counter for unique ID data-attribute for new boxes.

    function addNewBox() {
        const newBox = document.createElement('div');
        newBox.setAttribute('data-box-id', boxIdCtr.toString());
        newBox.textContent = `Box ${boxIdCtr}`;
        newBox.classList.add('box');
        newBox.style.backgroundColor = boxColor;
        boxContainer.appendChild(newBox);
        boxIdCtr++; // Increment the unique counter for the next box.
    }

    colorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newColor = colorInput.value.trim();
        const boxes = document.querySelectorAll('.box');
        for (const box of boxes) {
            box.style.backgroundColor = newColor;
        }
        colorInput.value = ''; // Clear color input field after each form submission.
        boxColor = newColor;
    });
    
    newBoxBtn.addEventListener('click', function () {
        addNewBox();
    });

	window.addEventListener("keydown", function (event)
	{
		/* Prevents the color input field from being focused when the "n" key is pressed. */
		if (event.target.id === "color-input")
		{
			return;
		}

		/* Adds a new box when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N")
		{
			addNewBox(); 
		}
	});

    /* Removes the clicked box when it is double-clicked. */
    document.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.remove();
        }
    });
    /* Temporarily change display text to show coordinates when the mouse is over a box. */
    document.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.textContent = `x: ${e.pageX}, y: ${e.pageY}`;
        }
    });
    /* Reverts the display text to the box ID when the mouse leaves a box. */
    document.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.textContent = `Box ${e.target.getAttribute('data-box-id')}`;
        }
    });
});