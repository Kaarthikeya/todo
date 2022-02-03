const overlay = document.getElementsByClassName("overlay_add")[0];
const dummyDiv = document.getElementById("dum");
function startOverlay() {
	dummyDiv.classList.add("blur_effect");
	overlay.classList.add("overlay_open");
}
function startEditOverlay() {
	dummyDiv.classList.add("blur_effect");
	document.getElementById("overlay_edit").classList.add("overlay_open");
}
function closeEditOverlay() {
	dummyDiv.classList.remove("blur_effect");
	document.getElementById("overlay_edit").classList.remove("overlay_open");
}
function closeOverlay() {
	overlay.classList.remove("overlay_open");
	dummyDiv.classList.remove("blur_effect");
	document.getElementById("note_title").value = "";
}
function getRandInt() {
	return Math.floor(Math.random() * 999999999999999) + 1;
}

var number = localStorage.length;
if (number != 0) {
	for (var i = 0; i < number; i++) {
		const idNumber = localStorage.key(i);
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
		titleFinal.id = "title";
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

		/* This is the dom that is constructed
			<div class="notes_container">
			<div class="box">
				<div class="checkbox"></div>
				<div class="note_info">
					<div class="title" id="title"></div>
					<div class="edit">
						<i class="fas fa-edit"></i>
					</div>
					<div class="delete">
						<i class="fas fa-trash"></i>
					</div>
				</div>
			</div>
		</div>
		 */

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
			unchangedText = localStorage.getItem(idNumber);
			startEditOverlay();
			document.getElementById("note_edit_title").value = unchangedText;

			document
				.getElementById("edit_btn")
				.addEventListener("click", function () {
					if (
						document.getElementById("note_edit_title").value === ""
					) {
						return alert("Aarya is a bad boy");
					}
					localStorage.setItem(
						idNumber,
						document.getElementById("note_edit_title").value
					);
					location.reload();
				});
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
		unchangedText = localStorage.getItem(randint);
		startEditOverlay();
		document.getElementById("note_edit_title").value = unchangedText;

		document
			.getElementById("edit_btn")
			.addEventListener("click", function () {
				if (document.getElementById("note_edit_title").value === "") {
					return alert("Aarya is a bad boy");
				}
				localStorage.setItem(
					randint,
					document.getElementById("note_edit_title").value
				);
				location.reload();
			});
	});

	document.getElementById("note_title").value = "";
	closeOverlay();
}
