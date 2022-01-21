var overlay = document.getElementById("overlay_add");

/* For opening Overlay for adding a new note */

function startOverlay() {
	overlay.style.transform = "scale(1) translate(-50%, -50%)";
}

//For closing the opened overlay//

function closeOverlay() {
	overlay.style.transform = "scale(0) translate(-50%, -50%)";
}

const arrayOfNotes = [];
var idForElements = 0;

function addNewNote() {
	/* GRabbing the text from the input */

	var titleText = document.getElementById("note_title").value;
	var additionalText = document.getElementById(
		"additional_info_for_adding_a_new_note"
	).value;

	/* Making sure that title is not empty!! */
	if (!titleText) {
		alert("Give a title idiot!!! Hate you!!");
		return;
	}

	/* Working with arrays kids...lets go!! */
	arrayOfNotes.push({
		id: idForElements,
		titleName: titleText,
		addText: additionalText,
	});

	//CReating new div elements to suit the needs;
	var newNote = document.createElement("div");
	var checkBox = document.createElement("div");
	var noteInfo = document.createElement("div");
	var titleFinal = document.createElement("div");
	var addFinal = document.createElement("div");
	var checkBoxClick = document.createElement("input");
	var editButton = document.createElement("div");
	var editfa = document.createElement("i");

	// GIving them class names;
	newNote.className = "box";
	newNote.id = idForElements;
	checkBox.className = "checkbox";
	noteInfo.className = "note_info";
	titleFinal.className = "title";
	addFinal.className = "additional_info";
	editButton.className = "edit";
	editfa.classList.add = "fas";
	editfa.classList.add = "fa-edit";

	/* Check Box click functions and stuff!! */

	checkBoxClick.type = "checkbox";

	//Appending Stuff
	newNote.appendChild(checkBox);
	newNote.appendChild(noteInfo);
	newNote.appendChild(editButton);
	noteInfo.appendChild(titleFinal);
	noteInfo.appendChild(addFinal);
	checkBox.append(checkBoxClick);
	editButton.appendChild(editfa);
	//Giving their text to them;
	titleFinal.textContent = titleText;
	addFinal.textContent = additionalText;
	newNote.style.display = "flex";
	idForElements++;

	var container = document.getElementsByClassName("notes_container")[0];
	container.appendChild(newNote);

	/* CheckBox Stuff */

	checkBox.addEventListener("click", function () {
		var checky = this.children[0];
		if (checky.checked) {
			newNote.style.filter = "opacity(0.3)";
			newNote.style.textDecoration = "line-through";
		}
	});

	document.getElementById("note_title").value = "";
	document.getElementById("additional_info_for_adding_a_new_note").value = "";
	closeOverlay();
}
