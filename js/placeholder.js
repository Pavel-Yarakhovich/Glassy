var inputElements = document.querySelectorAll('input[type="email"]');
var test = document.querySelector('#em');

function addPlaceholder() {
		for (let _input of inputElements) {
			var placeholderContent = input.placeholder.textContent;
			var placeholder = document.createElement(p);
			placeholder.innerHTML = placeholderContent;
			_input.before(placeholder);
		}
}

test.addEventListener("click", function(event) {
				preventDefault();
				addPlaceholder();
})