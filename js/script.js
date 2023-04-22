const form = document.querySelector('#form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password1 = document.querySelector('#password')
const password2 = document.querySelector('#password2')
form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs()
})

function checkInputs() {
	const userNameValue = userName.value.trim()
	const emailValue = email.value.trim()
	const password1Value = password1.value.trim()
	const password2Value = password2.value.trim()
	var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if(userNameValue === "") {
		setError(userName, "username cannot be empty");
	} else {
		setSuccess(username);
	}
	if(emailValue === "") {
		setError(email, "email cannot be empty");
	}
	if(emailRegex.test(emailValue)) {
		setSuccess(email);
	} else {
		setError(email, "Please enter a valid email address");
	}
	if(password1Value === "") {
		setError(password1, 'password is required')
	} else {
		setSuccess(password1)
	}
	if(password2Value === "") {
		setError(password2, 'passsword is required ')
	} else if(password1Value === password2Value) {
		setSuccess(password2)
	} else {
		setError(password2, 'password is not matched')
	}
}

function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
	formControl.className = 'form-control error'
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success'
}