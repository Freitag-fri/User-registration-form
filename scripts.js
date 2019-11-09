function submit() {
    const log = document.querySelector('#login').value.trim();
    const password = document.querySelector('#password').value.trim();
    const checkPassword = document.querySelector('#checkPassword').value.trim();
    const validationLogin = /[^a-z A-Z]/;
    const validationPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/

    if(log === ''){
        alert("Enter login");
    }

    else if (log.match(validationLogin)){
        alert("Username must to have only letters. \nPlease try again.");
    }

    else if(!password.match(validationPassword)){
        alert("Password must contains at least one digit and one small letter and one big letter.");
    }  

    else if (password !== checkPassword) {
        alert("Your entered passwords not equal");
    }

    else {
        alert ("Successful registration. \nHello new member")
    }   
}

document.querySelector('#button').addEventListener("click", () => {
     submit();
});

document.querySelector('form').addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        // Do more work
        submit();
    }
});