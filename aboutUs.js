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


// The 3 navigation bars on the top right of the homescreen (navBarMenuImg)

let navBarMenu = document.getElementById("navBarMenuImg");
let homeA = document.getElementById("homeA");
let contactUsA = document.getElementById("contactUsA");
let servicesA = document.getElementById("servicesA");
let aboutUsA = document.getElementById("aboutUsA");
let yelpLogo = document.getElementById("yelpLogo");
let leftWrapper = document.getElementById("leftWrapper");
let mainLinksMobile = document.getElementById("mainLinksMobile");
let body = document.getElementById("theBody")

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
        body.style.overflowY = "hidden";
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
        logo.style.backgroundColor = "transparent"

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

// We want a footer, so the background should stretch out to that footer by an extra 5vw.


let galleryUL = document.getElementById("galleryUL");
// *image background
let galleryBackground = document.getElementById("imageGalleryBackground");

function initialBackground() {
    if (window.innerWidth > 1199) {
        mult = .15;
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
            mult = .15;
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



window.addEventListener("resize", function() {
    if (window.innerWidth > 1199) {
        mult = .15;
    }
    else {
        mult = .16;
    }
    var galleryHeight = galleryUL.offsetHeight;
    galleryHeight = galleryHeight + (mult * window.innerWidth);
    galleryHeight = galleryHeight.toString();
    galleryHeight = galleryHeight + "px";

    galleryBackground.style.height = galleryHeight;
})

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
