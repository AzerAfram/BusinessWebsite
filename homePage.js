// Published on 10/31 at 8:05 PM by Azer Afram

/* November 6: Fixed the following issues:
    - About Us page mobile navigation bar links (were not centered due to discrepancy caused by vertical scroll bar)

    - "Schedule a Service" button was covered by the logo div (automated the positioning of the background and the links using js)

    - Web page would not scroll to top at the activation of the "Schedule a Service" button (used "scroll to" at the activation of the button)

    - Navigation bar links would open in new tab ("replaced "target=_blank" to "target=_self" which is default but did not work if left auto)
    
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

const nameInput = document.getElementById("nameS");
const phoneInput = document.getElementById("phoneS");
const issueInput = document.getElementById("issue");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
let timeLabel = document.getElementById("timeLabel");
let dateLabel = document.getElementById("dateLabel");
let issue = document.getElementById("isssueLabel");
let phoneLabel = document.getElementById("phoneLabelS");
let nameLabel = document.getElementById("nameLabelS");
let phoneError = false;
let issueError = false;
let firstNameError = false;
let dateError = false;
let timeError = false;


    nameInput.addEventListener('focusin', (input) => {
        if (firstNameError == false) {
            nameLabel.style.color = "#4285F4";
            nameInput.style.borderColor = "#4285F4";
        } 
        if (input.target.value !== "") {
            nameInput.style.borderWidth = "2px";
            
        }
        else {
            nameLabel.style.marginTop = "-134px";
            nameLabel.style.backgroundColor = "white";
            nameLabel.style.paddingLeft = "5px";
            nameLabel.style.paddingRight = "5px";
            nameInput.style.borderWidth = "2px";
            nameLabel.style.fontSize = "13px";
        }
     })

     nameInput.addEventListener('focusout', (input) => {
         nameInput.style.borderWidth = "1px";
         if (firstNameError == false) {
             nameInput.style.borderColor = "grey";
             nameLabel.style.color = "grey";
         }
         if (input.target.value === "") {
            nameLabel.style.fontSize = "15px";
            nameLabel.style.marginTop = "-115px";
            nameLabel.style.padding = "0px";
         }
     })

     phoneInput.addEventListener('focusin', (input) => {
        if (phoneError == false) {
            phoneInput.style.borderColor = "#4285F4";
            phoneLabel.style.color = "#4285F4";
        }

        if (input.target.value !== "") {
            phoneInput.style.borderWidth = "2px";
        }
        else {
            phoneLabel.style.marginTop = "-61px";
            phoneLabel.style.backgroundColor = "white";
            phoneLabel.style.paddingLeft = "5px";
            phoneLabel.style.paddingRight = "5px";
            phoneInput.style.borderWidth = "2px";
            phoneLabel.style.fontSize = "13px";
        }
    })

    phoneInput.addEventListener("focusout", (input) => {
        if (phoneError == false) {
            phoneInput.style.borderColor = "grey";
            phoneLabel.style.color = "grey";
        }
        if (input.target.value === "" ) {
            phoneLabel.style.fontSize = "15px";
            phoneLabel.style.marginTop = "-42px";
            phoneLabel.style.padding  = "0px";
            
        }
        phoneInput.style.borderWidth = "1px";
    })

    issueInput.addEventListener("focusin", (input) => {
        if (issueError == false) {
            issueInput.style.borderColor = "#4285F4";
            issueLabel.style.color = "#4285F4";
        }

        if (input.target.value !== "") {
            issueInput.style.borderWidth = "2px";
        }
        else {
            issueLabel.style.marginTop = "158px";
            issueLabel.style.backgroundColor = "white";
            issueLabel.style.paddingLeft = "5px";
            issueLabel.style.paddingRight = "5px";
            issueInput.style.borderWidth = "2px";
            issueLabel.style.fontSize = "13px";
        }
    })

    issueInput.addEventListener("focusout", (input) => {
        if (issueError == false) {
            issueInput.style.borderColor = "grey";
            issueLabel.style.color = "grey";
        }
        if (input.target.value === "" ) {
            issueLabel.style.fontSize = "15px";
            issueLabel.style.marginTop = "177px";
            issueLabel.style.padding = "0px";
        }
        issueInput.style.borderWidth = "1px";
    })

    
    dateInput.addEventListener('focusin', (input) => {
        if (dateError == false) {
            dateInput.style.borderColor = "#4285F4";
            dateLabel.style.color = "#4285F4";
        }

        if (input.target.value !== "") {
            dateInput.style.borderWidth = "2px";
        }
        else {
            dateLabel.style.marginTop = "12px";
            dateLabel.style.backgroundColor = "white";
            dateLabel.style.paddingLeft = "5px";
            dateLabel.style.paddingRight = "5px";
            dateInput.style.borderWidth = "2px";
            dateLabel.style.fontSize = "13px";
        }
    })

    dateInput.addEventListener("focusout", (input) => {
        if (dateError == false) {
            dateInput.style.borderColor = "grey";
            dateLabel.style.color = "grey";
        }
        if (input.target.value === "" ) {
            dateLabel.style.fontSize = "15px";
            dateLabel.style.marginTop = "31px";
            dateLabel.style.padding  = "0px";
            
        }
        dateInput.style.borderWidth = "1px";
    })

    timeInput.addEventListener('focusin', (input) => {
        if (timeError == false) {
            timeInput.style.borderColor = "#4285F4";
            timeLabel.style.color = "#4285F4";
        }

        if (input.target.value !== "") {
            timeInput.style.borderWidth = "2px";
        }
        else {
            timeLabel.style.marginTop = "86px";
            timeLabel.style.backgroundColor = "white";
            timeLabel.style.paddingLeft = "5px";
            timeLabel.style.paddingRight = "5px";
            timeInput.style.borderWidth = "2px";
            timeLabel.style.fontSize = "13px";
        }
    })

    timeInput.addEventListener("focusout", (input) => {
        if (timeError == false) {
            timeInput.style.borderColor = "grey";
            timeLabel.style.color = "grey";
        }
        if (input.target.value === "" ) {
            timeLabel.style.fontSize = "15px";
            timeLabel.style.marginTop = "105px";
            timeLabel.style.padding  = "0px";
            
        }
        timeInput.style.borderWidth = "1px";
    })


    
const form = document.getElementById("serviceForm");

form.addEventListener('submit', (e) => {
    let prevent = false;
    if (nameInput.value === '') {
        nameInput.style.borderColor = "red";
        nameLabel.style.color = "#de5246";
        prevent = true;
        firstNameError = true;
    }
    else if (nameInput !== '') {
        firstNameError = false;
        nameInput.style.borderColor = "black";
        nameLabel.style.color = "grey";
    }
    if (phoneInput.value === '') {
        phoneInput.style.borderColor = "red";
        phoneLabel.style.color = "#de5246";
        phoneError = true;
        prevent = true;
    }
    else if (phoneInput.value !== '') {
        phoneError = false;
        phoneInput.style.borderColor = "black";
        phoneLabel.style.color = "grey";
    }
    if (issueInput.value === '') {
        issueInput.style.borderColor = "red";
        issueLabel.style.color = "#de5246";
        prevent = true;
        issueError = true;
    }
    else if (issueInput.value !== '') {
        issueError = false;
        issueInput.style.borderColor = "black";
        issueLabel.style.color = "grey";
    }
    if (dateInput.value === '') {
        dateInput.style.borderColor = "red";
        dateLabel.style.color = "#de5246";
        prevent = true;
        dateError = true;
    }
    if (dateInput.value !== '') {
        dateError = false;
        dateInput.style.borderColor = "black";
        dateLabel.style.color = "grey";
    }
    if (timeInput.value === '') {
        timeInput.style.borderColor = "red";
        timeLabel.style.color = "#de5246";
        prevent = true;
        timeError = true;
    }
    else if (timeInput.value !== '') {
        timeError = false;
        timeInput.style.borderColor = "black";
        timeLabel.style.color = "grey";
    }


    if (prevent == true) {
        e.preventDefault();
    }
    else {
        e.preventDefault();
     
        const serviceID = 'service_by1zo0g';
        const templateID = 'template_vg243hk';
        var templateParameters = {
            nameS: nameInput.value,
            phoneS: phoneInput.value,
            date: dateInput.value,
            time: timeInput.value,
            issue: issueInput.value
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

// When the white "Schedula a Service" is clicked modal content is displayed.

let serviceButton = document.getElementById("servicePopup");
let servicePopupDiv = document.getElementById("servicePopupDiv");
let modal = document.getElementById("serviceModal");
let body = document.getElementById("theBody");

    serviceButton.addEventListener("click", () => {
        modal.style.display = "flex";
        body.style.margin = "0";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        window.scrollTo(0, 0);
    })

// When red X mark image is clicked the modal content display is set to none.

let xMark = document.getElementById("closeImgSrc");

    xMark.addEventListener("click", () => {
        modal.style.display = "none";
        body.style.margin = "auto";
        body.style.height = "auto";
        body.style.overflow = "auto";
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
let selfMaintenanceBottom = document.getElementById("selfMaintenanceBottom");
let conclusionText = document.getElementById("conclusionText");


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
            contactUsA.style.fontSize = "17px";
            servicesDiv.style.left = "61vw";
            servicesA.style.fontSize = "17px";
            homeA.style.fontSize = "17px";
            aboutUsA.style.fontSize = "17px";
            yelpLogo.style.filter = "brightness(150%)";
            aboutUsA.style.display = "block";
            homeA.style.display = "block";
            servicesDiv.style.display = "block";
            contactUsA.style.display = "block";
            logo.style.paddingBottom = "0px";
            logo.style.paddingLeft = "50vw";
            logo.style.paddingRight = "50vw";
            logo.style.backgroundColor = "#F4B400"

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
        }
        else if (window.innerWidth > 1050) {
            homeA.style.left = "18vw";
            aboutUsA.style.right = "18vw";
        }
        
    })

// used in order to position links according to screen width when page is first loaded

function mandatoryIntialSize() {

    if (window.innerWidth > 900) {
        mainLinksMobile.style.display = "none";
        leftWrapper.style.display = "none";

        servicesCooling.style.fontSize = "14px";
        contactUsA.style.right = "61.1vw";
        contactUsA.style.fontSize = "17px";
        servicesDiv.style.left = "61vw";
        servicesA.style.fontSize = "17px";
        homeA.style.fontSize = "17px";
        aboutUsA.style.fontSize = "17px";
        yelpLogo.style.filter = "brightness(150%)";
        aboutUsA.style.display = "block";
        homeA.style.display = "block";
        servicesDiv.style.display = "block";
        contactUsA.style.display = "block";
        //logo.style.paddingBottom = "102.5px";
        //logo.style.paddingLeft = "0px";
        //logo.style.paddingRight = "0px";
        //logo.style.backgroundColor = "transparent"
        logo.style.paddingBottom = "0px";
        logo.style.paddingLeft = "50vw";
        logo.style.paddingRight = "50vw";
        logo.style.backgroundColor = "#F4B400"

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


// Here we want to stretch the grey background to the bottom of the page.
// More specifically, the bottom of the image gallery.
// We know that the start of grey background is 15vw higher than the start of image gallery.
// We also know that 1vw is 1% of the browser height so 15vw is 15% of the browser height.
// This means that the height of the background image gallery should be 15vw more than the height of the image gallery.

// We want a footer though so, the background should stretch out to that footer by an extra 5vw.


let galleryUL = document.getElementById("galleryUL");
// *image background
let galleryBackground = document.getElementById("galleryBackground");
var mult = .15;

function initialBackground() {
    if (window.innerWidth > 1199) {
        mult = .122;
    }
    else {
        mult = .16;
    }
    var galleryHeight = galleryUL.offsetHeight;
    galleryHeight = galleryHeight + (mult * window.innerWidth);
    galleryHeight = galleryHeight.toString();
    galleryHeight = galleryHeight + "px";

    galleryBackground.style.height = galleryHeight;
}
initialBackground();



window.onload = function () {
        function initialBackground() {
            if (window.innerWidth > 1199) {
                mult = .122;
            }
            else {
                mult = .16;
            }
            var galleryHeight = galleryUL.offsetHeight;
            galleryHeight = galleryHeight + (mult * window.innerWidth);
            galleryHeight = galleryHeight.toString();
            galleryHeight = galleryHeight + "px";
        
            galleryBackground.style.height = galleryHeight;
        }
        initialBackground();
}



/*
function reloadFunc() {
    window.location.reload();
}
reloadFunc();
*/

// navigation bar links top positions, only for homepage

let mainMenu = document.getElementById("main_menu");

function navBarResize() {


    window.addEventListener("resize", function() {
        if (mainLinksMobile.style.display == "none") {
            let navBarPos = logo.offsetHeight;

            navBarPos = navBarPos - 20; // height of links
            navBarPos = navBarPos.toString();
            navBarPos = navBarPos + "px";


            homeA.style.top = navBarPos;
            contactUsA.style.top = navBarPos;
            servicesDiv.style.top = navBarPos;
            aboutUsA.style.top = navBarPos;
        }
    })


    let navBarPos = logo.offsetHeight;

    navBarPos = navBarPos - 20; // height of links
    navBarPos = navBarPos.toString();
    navBarPos = navBarPos + "px";


    homeA.style.top = navBarPos;
    contactUsA.style.top = navBarPos;
    servicesDiv.style.top = navBarPos;
    aboutUsA.style.top = navBarPos;
}

if (mainLinksMobile.style.display == "none") {
    navBarResize();
}

window.addEventListener("resize", function() {
    if (mainLinksMobile.style.display == "none") {
        navBarResize();
    }
})


window.addEventListener("resize", function() {
    if (mainLinksMobile.style.display == "block") {
        homeA.style.top = "10vw";
        contactUsA.style.top = "30vw";
        servicesDiv.style.top = "51vw";
        aboutUsA.style.top = "72vw";
    }
})

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
