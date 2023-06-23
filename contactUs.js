// Navigation bar states
/*window.onscroll = function() {scrollFunction()}


function scrollFunction() {

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("logo").style.width = "8.5%";
        document.getElementById("logo").style.height = "150px";
        document.getElementById("logo").style.padding = "50px";
        document.getElementById("logo").style.marginTop = "-50px";
        document.getElementById("inner_main_menu1").style.marginTop = "-107px";
        document.getElementById("logo").style.marginLeft = "818px";
    }
    else {
        document.getElementById("logo").style.width = "17%";
        document.getElementById("logo").style.marginTop = "0";
        document.getElementById("logo").style.padding= "0";
        document.getElementById("logo").style.height = "300px";
        document.getElementById("inner_main_menu1").style.marginTop = "-155px";
        document.getElementById("logo").style.marginLeft = "791px"

    }
}
*/

let logo = document.getElementById("logo");
window.onscroll = function() {scrollFunction()}
function scrollFunction () {

}

let servicesMain = document.getElementById("servicesA");
let servicesCooling = document.getElementById("servicesCooling");
let servicesDiv = document.getElementById("servicesDiv");
let testDiv = document.getElementById("testDiv");

    servicesMain.onmouseover = function() {
        servicesCooling.style.display = "block";
        servicesDiv.style.backgroundColor = "#F4B400";
        servicesDiv.style.borderRadius = "5px";

    }

    testDiv.onmouseleave = function() {
        servicesCooling.style.display = "none";
        servicesDiv.style.backgroundColor = "transparent";
    }

// Input label animations
const firstNameInput = document.getElementById("first_name");
let firstNameLabel = document.getElementById("firstName");
let firstNameClear = false;
let emailClear = false;
let phoneClear = false;
let zipCodeClear = false;
let messageClear = false;
    firstNameInput.addEventListener('focusin', (input) => {
        if (firstNameClear == false) {
            firstNameLabel.style.color = "#4285F4";
            firstNameInput.style.borderColor = "#4285F4";
        }
        
        if (input.target.value  !== "") {
            firstNameInput.borderWidth = "2px"
        }
        else {
            firstNameInput.style.borderWidth = "2px";
            firstNameLabel.style.backgroundColor = "white";
            firstNameLabel.style.paddingLeft = "5px";
            firstNameLabel.style.paddingRight = "5px";
            firstNameLabel.style.fontSize = "15px";
            firstNameLabel.style.marginTop = "-1px";
        }
        
    })
    firstNameInput.addEventListener('focusout', (input) => {
        firstNameInput.style.borderWidth = "1px";
        if (firstNameClear == false) {
            firstNameInput.style.borderColor = "grey";
            firstNameLabel.style.color = "grey";
        }
        if (input.target.value === "") {
           firstNameLabel.style.fontSize = "15px";
           firstNameLabel.style.marginTop = "18px";
           firstNameLabel.style.padding = "0px";
        }
    })
        

const phoneInput = document.getElementById("phone");
let phoneLabel = document.getElementById("phoneLabel");
    phoneInput.addEventListener("focusin", (input) => {
        if (phoneClear == false) {
            phoneLabel.style.color = "#4285F4";
            phoneInput.style.borderColor = "#4285F4";
        }
        
        if (input.target.value  !== "") {
            phoneInput.borderWidth = "2px"
        }
        else {
            phoneInput.style.borderWidth = "2px";
            phoneLabel.style.backgroundColor = "white";
            phoneLabel.style.paddingLeft = "5px";
            phoneLabel.style.paddingRight = "5px";
            phoneLabel.style.fontSize = "15px";
            phoneLabel.style.marginTop = "72px";
        }
    })

    phoneInput.addEventListener('focusout', (input) => {
        phoneInput.style.borderWidth = "1px";
        if (phoneClear == false) {
            phoneInput.style.borderColor = "grey";
            phoneLabel.style.color = "grey";
        }
        if (input.target.value === "") {
           phoneLabel.style.fontSize = "15px";
           phoneLabel.style.marginTop = "91px";
           phoneLabel.style.padding = "0px";
        }
    })

const zipCodeInput = document.getElementById("zipCode");
let zipCodeLabel = document.getElementById("zipCodeLabel");
    zipCodeInput.addEventListener("focusin", (input) => {
        if (zipCodeClear == false) {
            zipCodeLabel.style.color = "#4285F4";
            zipCodeInput.style.borderColor = "#4285F4";
        }
        
        if (input.target.value  !== "") {
            zipCodeInput.borderWidth = "2px"
        }
        else {
            zipCodeInput.style.borderWidth = "2px";
            zipCodeLabel.style.backgroundColor = "white";
            zipCodeLabel.style.paddingLeft = "5px";
            zipCodeLabel.style.paddingRight = "5px";
            zipCodeLabel.style.fontSize = "15px";
            zipCodeLabel.style.marginTop = "145px";
        }
        })

    zipCodeInput.addEventListener('focusout', (input) => {
        zipCodeInput.style.borderWidth = "1px";
        if (zipCodeClear == false) {
            zipCodeInput.style.borderColor = "grey";
            zipCodeLabel.style.color = "grey";
        }
        if (input.target.value === "") {
           zipCodeLabel.style.fontSize = "15px";
           zipCodeLabel.style.marginTop = "164px";
           zipCodeLabel.style.padding = "0px";
        }
    })
const messageInput = document.getElementById("message");
let messageLabel = document.getElementById("messageLabel");
    messageInput.addEventListener('focusin', (input) => {
        if (messageClear == false) {
            messageLabel.style.color = "#4285F4";
            messageInput.style.borderColor = "#4285F4";
        }
        
        if (input.target.value  !== "") {
            messageInput.borderWidth = "2px"
        }
        else {
            messageInput.style.borderWidth = "2px";
            messageLabel.style.backgroundColor = "white";
            messageLabel.style.paddingLeft = "5px";
            messageLabel.style.paddingRight = "5px";
            messageLabel.style.fontSize = "15px";
            messageLabel.style.marginTop = "220px";
        }
    })
    messageInput.addEventListener('focusout', (input) => {
        messageInput.style.borderWidth = "1px";
        if (messageClear == false) {
            messageInput.style.borderColor = "grey";
            messageLabel.style.color = "grey";
        }
        if (input.target.value === "") {
           messageLabel.style.fontSize = "15px";
           messageLabel.style.marginTop = "239px";
           messageLabel.style.padding = "0px";
        }
    })

const form = document.getElementById("formDiv");


form.addEventListener('submit', (e) => {
    let prevent = false;
    if (firstNameInput.value === '') {
        firstNameInput.style.borderColor = "red";
        firstNameLabel.style.color = "#de5246";
        firstNameClear = true;
        prevent = true;
    }
    else if (firstNameInput.value !== '') {
        firstNameClear = false;
        firstNameInput.style.borderColor = "black";
        firstNameLabel.style.color = "grey";
    }
    
    if (phoneInput.value === '') {
        phoneInput.style.borderColor = "red";
        phoneLabel.style.color = "#de5246";
        phoneClear = true;
        prevent = true;
    }
    else if (phoneInput.value !== '') {
        phoneClear = false;
        phoneInput.style.borderColor = "black";
        phoneLabel.style.color = "grey";
    }

    if (zipCodeInput.value === '') {
        zipCodeInput.style.borderColor = "red";
        zipCodeLabel.style.color = "#de5246";
        zipCodeClear = true;
        prevent = true;
    }
    else if (zipCodeInput.value !== '') {
        zipCodeClear = false;
        zipCodeInput.style.borderColor = "black";
        zipCodeLabel.style.color = "grey";
    }

    if (messageInput.value === '') {
        messageInput.style.borderColor = "red";
        messageLabel.style.color = "#de5246";
        messageClear = true;
        prevent = true;
    }
    else if (messageInput.value !== '') {
        messageClear = false;
        messageInput.style.borderColor = "black";
        messageLabel.style.color = "grey";
    }


    if (prevent == true) {
        e.preventDefault();
    }
    else {
        e.preventDefault();
     
        const serviceID = 'service_by1zo0g';
        const templateID = 'template_h81luhu';
        var templateParameters = {
            first_name: firstNameInput.value,
            phone: phoneInput.value,
            zipCode: zipCodeInput.value,
            message: messageInput.value
        }
     
        emailjs.send(serviceID, templateID, templateParameters)
        .then(function(response) {
            window.location.reload();
           alert("Sent!");
        }, function(error) {
           alert("Error");
        });
    }
    
  
})





// The 3 navigation bars on the top right of the homescreen (navBarMenuImg)

let navBarMenu = document.getElementById("navBarMenuImg");
let homeA = document.getElementById("homeA");
let contactUsA = document.getElementById("contactUsA");
let servicesA = document.getElementById("servicesA");
let aboutUsA = document.getElementById("aboutUsA");
let yelpLogo = document.getElementById("yelpLogo");
let leftWrapper = document.getElementById("leftWrapper");
let mainLinksMobile = document.getElementById("mainLinksMobile");

    navBarMenu.addEventListener("click", () => {
        homeA.style.left = "69.46vw";
        homeA.style.fontSize = "4vw";
        homeA.style.top = "10vw";
        homeA.style.display = "block";
        contactUsA.style.right = "11.7vw";
        contactUsA.style.top = "30vw";
        contactUsA.style.fontSize = "4vw";
        contactUsA.style.display = "block";
        servicesDiv.style.left = "65.5vw";
        servicesDiv.style.top = "51vw";
        servicesA.style.fontSize = "4vw";
        servicesDiv.style.display = "block"
        aboutUsA.style.right = "14.3vw";
        aboutUsA.style.top = "72vw";
        aboutUsA.style.fontSize = "4vw";
        aboutUsA.style.display = "block";
        yelpLogo.style.filter = "brightness(100%)";
        leftWrapper.style.display = "block";
        mainLinksMobile.style.display = "block";
        body.style.margin = "0";
        body.style.height = "100%";
        body.style.overflow = "hidden";

    })

    leftWrapper.addEventListener("click", () =>{
        mainLinksMobile.style.display = "none";
        homeA.style.display = "none";
        contactUsA.style.display = "none";
        servicesDiv.style.display = "none";
        aboutUsA.style.display = "none";
        leftWrapper.style.display = "none";
        yelpLogo.style.filter = "brightness(150%)";
        body.style.margin = "auto";
        body.style.height = "auto";
        body.style.overflow = "auto";
    })


// Only works for resizes, not initial loadup into the webpage

    window.addEventListener("resize", function() {
        if (window.innerWidth > 900) {
            mainLinksMobile.style.display = "none";
            leftWrapper.style.display = "none";

            servicesCooling.style.fontSize = "14px";
            contactUsA.style.right = "61.1vw";
            contactUsA.style.top = "auto";
            contactUsA.style.fontSize = "17px";
            servicesDiv.style.left = "61vw";
            servicesDiv.style.top = "auto";
            servicesA.style.fontSize = "17px";
            homeA.style.fontSize = "17px";
            aboutUsA.style.fontSize = "17px";
            yelpLogo.style.filter = "brightness(150%)";
            aboutUsA.style.display = "block";
            homeA.style.display = "block";
            servicesDiv.style.display = "block";
            contactUsA.style.display = "block";
            logo.style.paddingBottom = "102.5px";
            logo.style.paddingLeft = "0px";
            logo.style.paddingRight = "0px";
            logo.style.backgroundColor = "transparent";
        }
        if (window.innerWidth <= 900) {
            if (mainLinksMobile.style.display == "none") {
                aboutUsA.style.display = "none";
                homeA.style.display = "none";
                servicesDiv.style.display = "none";
                contactUsA.style.display = "none";
            }

            servicesCooling.style.fontSize = "3vw";
            logo.style.paddingBottom = "0px";
            logo.style.paddingLeft = "50vw";
            logo.style.paddingRight = "50vw";
            logo.style.backgroundColor = "#F4B400";
        }

        else if (window.innerWidth > 900 && window.innerWidth <= 1050) {
            homeA.style.left = "13vw";
            aboutUsA.style.right = "13vw";
            aboutUsA.style.top = "auto";
            homeA.style.top = "auto";
        }
        else if (window.innerWidth > 1050) {
            homeA.style.left = "18vw";
            aboutUsA.style.right = "18vw";
            homeA.style.top = "auto";
            aboutUsA.style.top = "auto";
        }
        
    })

// used in order to position links according to screen width when page is first loaded

function mandatoryIntialSize() {

    if (window.innerWidth > 900) {
        mainLinksMobile.style.display = "none";
        leftWrapper.style.display = "none";

        contactUsA.style.right = "61.1vw";
        contactUsA.style.top = "auto";
        contactUsA.style.fontSize = "17px";
        servicesDiv.style.left = "61vw";
        servicesDiv.style.top = "auto";
        servicesA.style.fontSize = "17px";
        homeA.style.fontSize = "17px";
        aboutUsA.style.fontSize = "17px";
        yelpLogo.style.filter = "brightness(150%)";
        aboutUsA.style.display = "block";
        homeA.style.display = "block";
        servicesDiv.style.display = "block";
        contactUsA.style.display = "block";
        logo.style.paddingBottom = "102.5px";
        logo.style.paddingLeft = "0px";
        logo.style.paddingRight = "0px";
        logo.style.backgroundColor = "transparent"

    }
    if (window.innerWidth <= 900) {
        if (mainLinksMobile.style.display == "none") {
            aboutUsA.style.display = "none";
            homeA.style.display = "none";
            servicesDiv.style.display = "none";
            contactUsA.style.display = "none";
        }

        logo.style.paddingBottom = "0px";
        logo.style.paddingLeft = "50vw";
        logo.style.paddingRight = "50vw";
        logo.style.backgroundColor = "#F4B400"

    }

    else if (window.innerWidth > 900 && window.innerWidth <= 1050) {
        homeA.style.left = "15vw";
        aboutUsA.style.right = "15vw";
    }
    else if (window.innerWidth > 1050) {
        homeA.style.left = "20vw";
        aboutUsA.style.right = "20vw";
    }
}

mandatoryIntialSize();



