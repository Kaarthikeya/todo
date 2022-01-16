var overlay = document.getElementById("overlay_add");

/* For opening Overlay for adding a new note */

function startOverlay() {
	overlay.style.transition = "500ms ease";
	overlay.style.transform = "scale(1) translate(-50%, -50%)";
}

//For closing the opened overlay//

function closeOverlay() {
	overlay.style.transform = "scale(0) translate(-50%, -50%)";
}
