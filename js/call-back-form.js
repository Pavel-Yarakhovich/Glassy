var contactsBtn = document.querySelector('.contacts__btn');
var overlay = document.querySelector('.overlay');
var callBackForm = document.querySelector('.call-back-form');
var userName = callBackForm.querySelector('input[name="name"]');
var userEmail = callBackForm.querySelector('input[name="email"]');
var submitBtn = callBackForm.querySelector('input[name="submit"]');
var name = localStorage.getItem("name");
var email = localStorage.getItem("email");

contactsBtn.addEventListener("click", function(event) {
				event.preventDefault();
				overlay.classList.add("overlay-show");
				callBackForm.classList.add("call-back-form-show");
				callBackForm.classList.remove("call-back-form-shake");
				userName.focus();
				if (name) {
					userName.value = name;
					userEmail.focus();
				} else {
							userName.focus();
				}
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
					event.preventDefault();
					overlay.classList.remove("overlay-show");
					callBackForm.classList.remove("call-back-form-show");
			}
})

submitBtn.addEventListener("click", function(event) {
					if (!userName.value || !userEmail.value) {
								event.preventDefault();
								callBackForm.classList.add("call-back-form-shake");
								userName.focus();
					} else {
										localStorage.setItem("name", userName.value);
										localStorage.setItem("email", userName.email);
										overlay.classList.remove("overlay-show");
										callBackForm.classList.remove("call-back-form-show");
					}
})