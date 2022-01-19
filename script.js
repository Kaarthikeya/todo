var overlay = document.getElementById("overlay_add");

/* For opening Overlay for adding a new note */

function startOverlay() {
	overlay.style.transform = "scale(1) translate(-50%, -50%)";
}

//For closing the opened overlay//

function closeOverlay() {
	overlay.style.transform = "scale(0) translate(-50%, -50%)";
}

function getInfoOnClickonConsole() {
	/* GRabbing the text from the input */
	var titleText = document.getElementById("note_title").value;
	var additionalText = document.getElementById(
		"additional_info_for_adding_a_new_note"
	).value;

	//CReating new div elements to suit the needs;
	var newNote = document.createElement("div");
	var checkBox = document.createElement("div");
	var noteInfo = document.createElement("div");
	var titleFinal = document.createElement("div");
	var addFinal = document.createElement("div");
	var checkBoxClick = document.createElement("input");

	checkBoxClick.type = "checkbox";
	// GIving them class names;
	newNote.className = "box";
	newNote.id = "box";
	checkBox.className = "checkbox";
	noteInfo.className = "note_info";
	titleFinal.className = "title";
	addFinal.className = "additional_info";
	//Appending Stuff
	newNote.appendChild(checkBox);
	newNote.appendChild(noteInfo);
	noteInfo.appendChild(titleFinal);
	noteInfo.appendChild(addFinal);
	checkBox.append(checkBoxClick);
	//Giving their text to them;
	titleFinal.textContent = titleText;
	addFinal.textContent = additionalText;
	newNote.style.display = "flex";
	var container = document.getElementsByClassName("notes_container")[0];
	container.appendChild(newNote);

	document.getElementById("note_title").value = "";
	document.getElementById("additional_info_for_adding_a_new_note").value = "";

	closeOverlay();
}
