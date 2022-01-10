/* For adding new things to our new note, right! 
	Step 1: Append the child on a normal basis;
	Step 2: Put that in a function;
	Step 3: Enjoy!
*/

var boxes = document.querySelector(".box_items");
boxes.onclick = () => {
	var classNameForOldBox = "box_items_flex";
	var newBox = document.createElement("div");
	var textForNewBox = document.querySelector(".box_items").textContent;
	newBox.className = "box_items";
	newBox.append(textForNewBox);

	document.querySelector(".box_items_flex").append(newBox);
};
