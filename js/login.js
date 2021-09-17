
const elEmail = document.querySelector('#eMail')
const elPassword = document.querySelector('#password')
const elOutput = document.querySelector('#output')


function login(event){

    let eMail = elEmail.value;
    let password = elPassword.value;
    let output = '';


    console.log(eMail + password);

    output = eMail + ' ' +  password;

    elOutput.textContent = output;

    event.preventDefault();
}

addEventListener("submit", login, false);