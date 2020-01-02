const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const listItem = document.querySelectorAll('li')


function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	let btn = document.createElement('button')
	btn.appendChild(document.createTextNode('Delete!'))
	li.appendChild(btn)
	btn.setAttribute('class', 'newBtn')
	btn.onclick = removeParent
}

// remove list item
function removeParent(evt){
	evt.target.parentNode.remove();
}

// --------------
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


//Toggle the done class to list items
function toggleClassDone(evt){
	evt.target.classList.toggle('done')
}
ul.onclick = toggleClassDone

//Adding delete btn to existing items
function createBtnForExistList() {
	listItem.forEach(function(data){
		let btn = document.createElement('button')
		btn.appendChild(document.createTextNode('Delete!'))
        data.appendChild(btn)
        btn.onclick = removeParent
		btn.setAttribute('class', 'existBtn')
	})
}
createBtnForExistList()














