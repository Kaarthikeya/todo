var overlay = document.getElementsByClassName("overlay_add")[0];
function startOverlay() {
	overlay.classList.add("overlay_open");
	document.getElementsByClassName
}
function closeOverlay() {
	overlay.classList.remove("overlay_open");
}
function getRandInt() {
	return Math.floor(Math.random() * 999999999999999) + 1;
}

var number = localStorage.length;
if (number != null) {
	for (var i = 0; i < number; i++) {
		const idNumber = localStorage.key(i);
		console.log(idNumber);
		//CReating new div elements to suit the needs;
		var newNote = document.createElement("div");
		var checkBox = document.createElement("div");
		var noteInfo = document.createElement("div");
		var titleFinal = document.createElement("div");
		var editButton = document.createElement("div");
		var deleteButton = document.createElement("div");
		var editfa = document.createElement("i");
		var deletefa = document.createElement("i");

		// GIving them class names;
		newNote.className = "box";
		newNote.id = localStorage.key(i);
		checkBox.className = "checkbox";
		noteInfo.className = "note_info";
		titleFinal.className = "title";
		editButton.className = "edit";
		deleteButton.className = "delete";
		deletefa.classList.add("fas", "fa-trash");
		editfa.classList.add("fas", "fa-edit");

		//Appending Stuff
		newNote.appendChild(checkBox);
		newNote.appendChild(noteInfo);
		noteInfo.appendChild(titleFinal);
		noteInfo.appendChild(editButton);
		noteInfo.appendChild(deleteButton);
		editButton.appendChild(editfa);
		deleteButton.appendChild(deletefa);
		//Giving their text to them;
		newNote.style.display = "flex";

		titleFinal.textContent = localStorage.getItem(localStorage.key(i));

		var container = document.getElementsByClassName("notes_container")[0];
		container.appendChild(newNote);

		deleteButton.addEventListener("click", function () {
			document.getElementById(idNumber).style.display = "none";
			localStorage.removeItem(idNumber);
		});

		checkBox.addEventListener("click", function () {
			document.getElementById(idNumber).classList.toggle("line-through");
		});

		editButton.addEventListener("click", function () {
			startOverlay();
			document.getElementById("note_title").value =
				this.previousSibling.textContent;
			this.parentNode.parentNode.style.display = "none";
			localStorage.removeItem(this.parentNode.parentNode.id);
		});
	}
}

function addNewNote() {
	/* GRabbing the text from the input */

	var titleText = document.getElementById("note_title").value;

	/* Making sure that title is not empty!! */
	if (!titleText) {
		alert("Give a title idiot!!!");
		return;
	}
	const randint = getRandInt();

	//CReating new div elements to suit the needs;
	var newNote = document.createElement("div");
	var checkBox = document.createElement("div");
	var noteInfo = document.createElement("div");
	var titleFinal = document.createElement("div");
	var editButton = document.createElement("div");
	var deleteButton = document.createElement("div");
	var editfa = document.createElement("i");
	var deletefa = document.createElement("i");

	// GIving them class names;
	newNote.className = "box";
	newNote.id = randint;
	checkBox.className = "checkbox";
	noteInfo.className = "note_info";
	titleFinal.className = "title";
	editButton.className = "edit";
	deleteButton.className = "delete";
	deletefa.classList.add("fas", "fa-trash");
	editfa.classList.add("fas", "fa-edit");

	//Appending Stuff
	newNote.appendChild(checkBox);
	newNote.appendChild(noteInfo);
	noteInfo.appendChild(titleFinal);
	noteInfo.appendChild(editButton);
	noteInfo.appendChild(deleteButton);
	editButton.appendChild(editfa);
	deleteButton.appendChild(deletefa);
	//Giving their text to them;
	titleFinal.textContent = titleText;
	newNote.style.display = "flex";

	var container = document.getElementsByClassName("notes_container")[0];
	container.appendChild(newNote);

	localStorage.setItem(randint, titleText);

	deleteButton.addEventListener("click", function () {
		document.getElementById(randint).style.display = "none";
		localStorage.removeItem(randint);
	});

	checkBox.addEventListener("click", function () {
		document.getElementById(randint).classList.toggle("line-through");
	});

	editButton.addEventListener("click", function () {
		startOverlay();
		document.getElementById("note_title").value =
			this.previousSibling.textContent;
		this.parentNode.parentNode.style.display = "none";
		localStorage.removeItem(this.parentNode.parentNode.id);
	});

	document.getElementById("note_title").value = "";
	closeOverlay();
}
