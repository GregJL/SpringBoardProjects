document.addEventListener("DOMContentLoaded", function ()
{
	const noteContainer = document.getElementById("note-container");
	const newNoteButton = document.getElementById("new-note-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");

	// TODO: Load the note color from the local storage.
	let noteColor = localStorage.getItem("noteColor") || null; // Stores the selected note color from the form.
	// TODO: Load the note ID counter from the local storage.
	let noteIdCounter = Number(localStorage.getItem("noteIdCounter")) || 0; // Counter for assigning unique IDs to new notes.

	// TODO: Load the notes from the local storage.
	function readNotes ()
	{
		let notes = localStorage.getItem("notes");

		if (!notes)
		{
			notes = [];
		}
		else
		{
			notes = JSON.parse(notes);
		}

		return notes;
	}
	function saveNotes (notes)
	{
		localStorage.setItem("notes", JSON.stringify(notes));
	}
	function loadNotes ()
	{
		const notes = readNotes();

		for (const note of notes)
		{
			const noteElement = document.createElement("textarea");
			noteElement.setAttribute("data-note-id", note.id.toString()); // Stores the note ID to its data attribute.
			noteElement.value = note.content; // Sets the note ID as value.
			noteElement.className = "note"; // Sets a CSS class.
			noteElement.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
			noteContainer.appendChild(noteElement); // Appends it to the note container element as its child.
		}
	}
	loadNotes();
	function addNewNote ()
	{
		const id = noteIdCounter;
		const content = `Note ${id}`;

		const note = document.createElement("textarea");
		note.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
		note.value = content; // Sets the note ID as value.
		note.className = "note"; // Sets a CSS class.
		note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
		noteContainer.appendChild(note); // Appends it to the note container element as its child.

		noteIdCounter++; // Increments the counter since the ID is used for this note.

		// TODO: Add new note to the saved notes in the local storage.
		const notes = readNotes();
		notes.push({ id: noteIdCounter, content: content });
		saveNotes(notes); // Saves the notes to the local storage.
		localStorage.setItem("noteIdCounter", noteIdCounter); // Updates the note ID counter in the local storage.
	}

	colorForm.addEventListener("submit", function (event)
	{
		event.preventDefault(); // Prevents the default event.

		const newColor = colorInput.value.trim();  // Removes whitespaces.

		const notes = document.querySelectorAll(".note");
		for (const note of notes)
		{
			note.style.backgroundColor = newColor;
		}

		colorInput.value = ""; // Clears the color input field after from submission.

		noteColor = newColor; // Updates the stored note color with the new selection.

		// TODO: Update the note color in the local storage.
		localStorage.setItem("noteColor", noteColor); // Saves the note color to the local storage.
	});

	newNoteButton.addEventListener("click", function ()
	{
		addNewNote();
	});

	document.addEventListener("dblclick", function (event)
	{
		if (event.target.classList.contains("note"))
		{
			event.target.remove(); // Removes the clicked note.

			// TODO: Delete the note from the saved notes in the local storage.
			const noteId = event.target.getAttribute("data-note-id");
			const notes = readNotes();
			const updatedNotes = notes.filter(note => note.id !== Number(noteId));
			saveNotes(updatedNotes); // Saves the updated notes to the local storage.
		}
	});

	noteContainer.addEventListener("blur", function (event)
	{
		if (event.target.classList.contains("note"))
		{
			// TODO: Update the note from the saved notes in the local storage.
			const noteId = event.target.getAttribute("data-note-id");
			const notes = readNotes();
			const updatedNotes = notes.map(note => {
				if (note.id === Number(noteId))
				{
					return { ...note, content: event.target.value };
				}
				return note;
			});
			saveNotes(updatedNotes); // Saves the updated notes to the local storage.
		}
	}, true);

	window.addEventListener("keydown", function (event)
	{
		/* Ignores key presses made for color and note content inputs. */
		if (event.target.id === "color-input" || event.target.type === "textarea")
		{
			return;
		}

		/* Adds a new note when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N")
		{
			addNewNote(); // Adds a new note.
		}
	});
});
