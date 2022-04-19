// Navigation bar states
window.onscroll = function() {scrollFunction()}


function scrollFunction() {

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("logo").style.width = "8.5%";
        document.getElementById("logo").style.height = "150px";
        document.getElementById("logo").style.padding = "50px";
        document.getElementById("logo").style.marginTop = "-50px";
        document.getElementById("inner_main_menu1").style.marginTop = "-95px";
        document.getElementById("logo").style.marginLeft = "818px";
    }
    else {
        document.getElementById("logo").style.width = "17%";
        document.getElementById("logo").style.marginTop = "0";
        document.getElementById("logo").style.padding= "0";
        document.getElementById("logo").style.height = "300px";
        document.getElementById("inner_main_menu1").style.marginTop = "-135px";
        document.getElementById("logo").style.marginLeft = "783px"

    }
}



// Input label animations
const firstNameInput = document.getElementById("first_name");
let firstNameLabel = document.getElementById("firstName");
let firstNameClear = false;
let lastNameClear = false;
let emailClear = false;
let phoneClear = false;
let zipCodeClear = false;
let messageClear = false;
    firstNameInput.addEventListener('focusin', (input) => {
        if (firstNameClear == false) {
            firstNameLabel.style.color = "#4285F4";
            firstNameInput.style.borderColor = "#4285F4";
        }
   
        firstNameInput.style.borderWidth = "2px";       
        firstNameLabel.style.paddingRight = "5px";
        firstNameLabel.style.paddingLeft = "5px";
        firstNameLabel.style.paddingBottom = "0px";
        firstNameLabel.style.bottom = "10px";
        firstNameLabel.style.backgroundColor = "white";
        firstNameLabel.style.fontSize = "13px";

        
    })
    firstNameInput.addEventListener('focusout', (input) => {
        if (input.target.value === '') {
            firstNameInput.style.borderWidth = "1px";
            firstNameLabel.style.bottom = "-12px";
            firstNameLabel.style.paddingRight = "0px";
            firstNameLabel.style.paddingLeft = "0px";
            firstNameLabel.style.paddingBottom = "0px";
            firstNameLabel.style.fontSize = "13px";
            
        }
        
        
        if (firstNameClear == false) {
            firstNameInput.style.borderColor = "grey";
            firstNameLabel.style.color = "rgb(66, 66, 66)";
        }
        firstNameInput.style.borderWidth = "1px";
    })
        

    
let lastNameInput = document.getElementById("last_name");
let lastNameLabel = document.getElementById("lastName");
    lastNameInput.addEventListener('focusin', (input) => {
        if (lastNameClear == false) {
            lastNameInput.style.borderColor = "#4285F4";
            lastNameLabel.style.color = "#4285F4";
        }
        lastNameInput.style.borderWidth = "2px";
        lastNameLabel.style.paddingRight = "5px";
        lastNameLabel.style.paddingLeft = "5px";
        lastNameLabel.style.top = "-53px";
        lastNameLabel.style.backgroundColor = "white";
        lastNameLabel.style.fontSize = "13px";
        lastNameLabel.style.left = "17px";
        
    })
        
    lastNameInput.addEventListener('focusout', (input) => {
        if (input.target.value === '') {

            lastNameLabel.style.top = "-31px";
            lastNameLabel.style.left = "14px";
        }
        if (lastNameClear == false) {
            lastNameInput.style.borderColor = "grey";
            lastNameLabel.style.color = "rgb(66, 66, 66)";
        }
        lastNameInput.style.borderWidth = "1px"
    })


const emailInput = document.getElementById("email");
let emailLabel = document.getElementById("emailLabel");
    emailInput.addEventListener("focusin", (input) => {
        if (emailClear == false) {
            emailInput.style.borderColor = "#4285F4";
            emailLabel.style.color = "#4285F4";
        }
        emailInput.style.borderWidth = "2px";
        emailLabel.style.paddingRight = "5px";
        emailLabel.style.paddingLeft = "5px";
        emailLabel.style.paddingBottom = "0px";
        emailLabel.style.bottom = "10px";
        emailLabel.style.backgroundColor = "white";
        emailLabel.style.fontSize = "13px";
        })
    emailInput.addEventListener('focusout', (input) => {
        if (input.target.value === '') {
            emailLabel.style.bottom = "-12px";
            emailLabel.style.paddingRight = "0px";
            emailLabel.style.paddingLeft = "0px";
            emailLabel.style.paddingBottom = "0px";
            emailLabel.style.fontSize = "13px";
        }
        if (emailClear == false) {
            emailInput.style.borderColor = "grey";
            emailLabel.style.color = "rgb(66, 66, 66)";
        }
        emailInput.style.borderWidth = "1px";
    })


const phoneInput = document.getElementById("phone");
let phoneLabel = document.getElementById("phoneLabel");
    phoneInput.addEventListener("focusin", (input) => {
        if (phoneClear == false) {
            phoneInput.style.borderColor = "#4285F4";
            phoneLabel.style.color = "#4285F4";
        } 
        phoneInput.style.borderWidth = "2px";
        phoneLabel.style.paddingRight = "5px";
        phoneLabel.style.paddingLeft = "5px";
        phoneLabel.style.paddingBottom = "0px";
        phoneLabel.style.bottom = "59px";
        phoneLabel.style.backgroundColor = "white";
        phoneLabel.style.fontSize = '13px';
                
        })

    phoneInput.addEventListener('focusout', (input) => {
        if (input.target.value === '') {
            phoneLabel.style.bottom = "37px";
            phoneLabel.style.paddingRight = "0px";
            phoneLabel.style.paddingLeft = "0px";
            phoneLabel.style.paddingBottom = "0px";
            phoneLabel.style.fontSize = "13px"
        }
        if (phoneClear == false) {
            phoneInput.style.borderColor = "grey";
            phoneLabel.style.color = "rgb(66, 66, 66)";
        }
        phoneInput.style.borderWidth = "1px";
    })

const zipCodeInput = document.getElementById("zipCode");
let zipCodeLabel = document.getElementById("zipCodeLabel");
    zipCodeInput.addEventListener("focusin", (input) => {
        if (zipCodeClear == false) {
            zipCodeInput.style.borderColor = "#4285F4";
            zipCodeLabel.style.color = "#4285F4";
        }
        zipCodeInput.style.borderWidth = "2px";
        zipCodeLabel.style.paddingRight = "5px";
        zipCodeLabel.style.paddingLeft = "5px";
        zipCodeLabel.style.paddingBottom = "px";
        zipCodeLabel.style.top = "-30px";
        zipCodeLabel.style.backgroundColor = "white";
        zipCodeLabel.style.fontSize = "13px"
        })

    zipCodeInput.addEventListener('focusout', (input) => {
        if (input.target.value === '') {

            zipCodeLabel.style.top = "-8px";
            zipCodeLabel.style.paddingRight = "0px";
            zipCodeLabel.style.paddingLeft = "0px";
            zipCodeLabel.style.paddingBottom = "0px";
            zipCodeLabel.style.fontSize = "13px";
        }
        if (zipCodeClear == false) {
            zipCodeInput.style.borderColor = "grey";
            zipCodeLabel.style.color = "rgb(66, 66, 66)";
        }
        zipCodeInput.style.borderWidth = "1px";
    })
const messageInput = document.getElementById("message");
let messageLabel = document.getElementById("messageLabel");
    messageInput.addEventListener('focusin', (input) => {
        if (messageClear == false) {
            messageInput.style.borderColor = "#4285F4";
            messageLabel.style.color = "#4285F4";
        }
        messageInput.style.borderWidth = "2px";
        messageLabel.style.backgroundColor = "white";
        messageLabel.style.bottom = "225px";
        messageLabel.style.paddingRight = "5px";
        messageLabel.style.paddingLeft = "5px";
        messageLabel.style.fontSize = "13px";
    })
    messageInput.addEventListener('focusout', (input) => {
        if (input.target.value === "") {
            messageLabel.style.backgroundColor = "white";
            messageLabel.style.bottom = "202px";
            messageLabel.style.paddingRight = "0px";
            messageLabel.style.paddingLeft = "0px";
            messageLabel.style.fontSize = "13px";
        }
        if (messageClear == false) {
            messageInput.style.borderColor = "grey";
            messageLabel.style.color = "rgb(66, 66, 66)";
        }
        messageInput.style.borderWidth = "1px";
    })

const form = document.getElementById('cols12');
const nameError = document.getElementById("lastFirstError");

form.addEventListener('submit', (e) => {
    // first and last name validation
    let nameErrors = [];
    let firstNameError = false;
    let lastNameError = false;
    let validError = false;
    if (firstNameInput.value === '' || firstNameInput.value == null || firstNameInput.value.length <= 1 || isNaN(firstNameInput.value) == false || firstNameInput.value.length > 20) {
        nameErrors.push("First name is invalid")
        firstNameError = true;
        validError = true;
        firstNameClear = true;
    }
    if (lastNameInput.value === '' || lastNameInput.value == null || lastNameInput.value.length <= 1 || lastNameInput.value.length > 20 || isNaN(lastNameInput.value) == false) {
        nameErrors.push("Last name is invalid")
        lastNameError = true;
        validError = true;
        lastNameClear = true;
    }
    if (firstNameError == true && lastNameError ==  true) {
        nameErrors = [];
        nameErrors.push("First and last names are invalid")
    }
    if (firstNameError == false && lastNameError == false) {
        nameError.innerText = '';
        firstNameClear = false;
        lastNameClear = false;
    }
    if (firstNameError == true) {
        firstNameInput.style.borderColor = "red";
        firstNameLabel.style.color = "#de5246"
    }
    if (firstNameError == false) {
        firstNameInput.style.borderColor = "grey";
        firstNameLabel.style.color = "rgb(66, 66, 66)";
        
        firstNameClear = false;
    }
    if (lastNameError == true) {
        lastNameInput.style.borderColor = "red";
        lastNameLabel.style.color = "#de5246";
    }
    if (lastNameError == false) {
        lastNameInput.style.borderColor = "black";
        lastNameLabel.style.color = "grey";
        lastNameClear = false;
    }
    if (nameErrors.length > 0 ) {
        e.preventDefault();
        nameError.innerText = nameErrors;

    }
    let contactErrorDiv = document.getElementById("contactInfoError");
    let contactError = [];
    let phoneError = false;
    let emailError = false;
    // contact info (email and phone) validation
    if (phoneInput.value === '' || phoneInput.value == null || phoneInput.value.length <= 1 || isNaN(phoneInput.value) == true || phoneInput.value.length > 20) {
        contactError.push("Phone number is invalid");
        phoneError = true;
        validError = true;
        phoneClear = true;
    }
    if (emailInput.value === '' || emailInput.value == null || emailInput.value.length <= 4 || emailInput.value.length > 30 ||emailInput.value.includes("@") == false) {
        contactError.push("Email address is invalid");
        emailError = true;
        validError = true;
        emailClear = true;
    }
    if (phoneError == true && emailError == true) {
        contactError = [];
        contactError.push("Contact information is invalid")
    }
    if (phoneError == false && emailError == false) {
        contactErrorDiv.innerText = '';
        emailClear = false;
        phoneClear = false;
    }
    if (phoneError == true) {
        phoneInput.style.borderColor = "red";
        phoneLabel.style.color = "#de5246";
    }
    if (phoneError == false) {
        phoneInput.style.borderColor = "black";
        phoneLabel.style.color = "grey";
        phoneClear = false;
    }
    if (emailError == true) {
        emailInput.style.borderColor = "red";
        emailLabel.style.color = "#de5246";
    }
    if (emailError == false) {
        emailInput.style.borderColor = "black";
        emailLabel.style.color = "grey";
        emailClear = false;
    }

    if (contactError.length > 0) {
        e.preventDefault();
        contactErrorDiv.innerText = contactError;
        document.getElementById("emailDiv").style.paddingBottom = "27px";
        document.getElementById("phoneDiv").style.paddingTop = "0px";
        document.getElementById("zipCodeTopDiv").style.paddingTop = "20px";

    }
    let addressErrorDiv = document.getElementById("addressError");
    let addressError = [];
    let addressValidError = false;
    if (zipCodeInput.value.length < 5 && zipCodeInput.value.length > 0) {
        addressError.push("Address invalid");
        addressValidError = true;
        zipCodeClear = true;
    }
    if (zipCodeInput.value.length > 90) {
        addressError.push("Address too long");
        addressValidError = true;
        zipCodeClear = true;
    }
    if (addressValidError == false) {
        addressErrorDiv.innerText = '';
        zipCodeClear = false;
    }
    if (addressValidError == true) {
        zipCodeInput.style.borderColor = "red";
        zipCodeLabel.style.color = "#de5246";
    }
    if (addressValidError == false) {
        zipCodeInput.style.borderColor = "black";
        zipCodeLabel.style.color = "grey";
    }
    if (addressError.length > 0) {
        e.preventDefault();
        addressErrorDiv.innerText = addressError;

    }
    let messageErrorDiv = document.getElementById("messageError");
    let messageError = [];
    let messageValidError = false;
    if (messageInput.value.length < 5) {
        messageError.push("Message is invalid")
        messageValidError = true;
        messageClear = true;
    }
    if (messageInput.value.length > 500) {
        messageError.push("Message too long")
        messageValidError = true;
        messageClear = true;
    }
    if (messageValidError == false) {
        messageErrorDiv.innerText = '';
        messageClear = false;
    }
    if (messageValidError == true) {
        messageInput.style.borderColor = "red";
        messageLabel.style.color = "#de5246";
    }
    if (messageValidError == false) {
        messageInput.style.borderColor = "black";
        messageLabel.style.color = "grey";
    }
    if (messageError.length > 0) {
        e.preventDefault();
        messageErrorDiv.innerText = messageError

    }

})
