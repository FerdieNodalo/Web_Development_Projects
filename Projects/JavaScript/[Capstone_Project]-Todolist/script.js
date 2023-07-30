let form = document.getElementById('form');
let unOrderedList = document.querySelector('ul#list_items');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let value = event.target[0].value;
	if (value.trim().length === 0) {
		alert('Please input something');
	} else {
		let newListItems = document.createElement('li');
		newListItems.setAttribute('class', 'list_container');

		let paragraph = document.createElement('p');
		paragraph.textContent = value;

		let checkBox = document.createElement('input');
		checkBox.setAttribute('type', 'checkbox');

		let btn = document.createElement('button');
		btn.setAttribute('id', 'delete');
		btn.textContent = 'delete';

		newListItems.appendChild(paragraph);
		newListItems.prepend(checkBox);
		newListItems.appendChild(btn);

		unOrderedList.appendChild(newListItems);

		deleteTask(btn, newListItems);
		isChecked(checkBox, paragraph);

		form.reset();
	}
});

const isChecked = (element, listItemLine) => {
	element.addEventListener('change', function () {
		if (element.checked) {
			listItemLine.setAttribute('class', 'paragraph_list');
		} else {
			listItemLine.classList.remove('paragraph_list');
		}
	});
};

const deleteTask = (eventElement, elementToDelete) => {
	eventElement.addEventListener('click', function () {
		elementToDelete.remove();
	});
};
