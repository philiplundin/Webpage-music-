
const elName = document.querySelector('#name')
const elLastName = document.querySelector('#lastName')
const elEmail = document.querySelector('#eMail')
const elGenre = document.querySelector('#genre')
const elOutput = document.querySelector('#output')


function register(event) {

    let name = elName.value;
    let lastName = elLastName.value;
    let eMail = elEmail.value;

    let genre = elGenre.value;
    let output = '';

    console.log(name, lastName, eMail, genre);

    output = name + ' ' + lastName + ' ' + eMail + ' ' + genre;
    elOutput.textContent = output;
    event.preventDefault();
}
addEventListener("submit", register, false);

function validateName() {

    let elNameFeedback = document.querySelector('#nameFeedback');
    if (this.value.length < 2) {
        elNameFeedback.textContent = 'Name must be atleast 2 characters';
    } else {
        elNameFeedback.textContent = '';
    }
}
elName.addEventListener('blur', validateName, false);

function validateLastName() {

    let elLastNameFeedback = document.querySelector('#lastNameFeedback');
    if (this.value.length < 2) {
        elLastNameFeedback.textContent = 'Lastname must be atleast 2 characters';
    } else {
        elLastNameFeedback.textContent = '';
    }
}
elLastName.addEventListener('blur', validateLastName, false);

function validateEmail() {

    let elEmailFeedback = document.querySelector('#eMailFeedback');
    if (this.value.length < 6) {
        elEmailFeedback.textContent = 'Email must be atleast 6 characters';
    } else {
        elEmailFeedback.textContent = '';
    }
}
elEmail.addEventListener('blur', validateEmail, false);
