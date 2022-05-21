<style>
<?php include "name.css" ?>
</style>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
</head>
<body>
<div id="socialMedia" >
        <ul id="links">
            <li id="yelp"><a href="https://www.yelp.com/biz/hmc-air-systems-murrieta"><img id="yelpLogo" src="images/168-1683390_yelp-logo-transparent-yelp-icon-removebg-preview.png" alt="Yelp"></a></li>
        </ul>
    </div>
    
    
    <nav id="main_menu"> 
        <div class="logo_img">
            <a href="web.html"><img id="logo" src="images/10360648421.png" alt="HMC Air Systems Logo"></a>
        </div>

        <div class="inner_main_menu" id="inner_main_menu1">
            <ul id="list">
                <li><a id="homeA">Home</a></li>
                <li><a id="servicesA" >Services</a></li>
                <li><a id="aboutUsA">About us</a></li>
                <li><a id = "contactUsA" href="contactUS.php">Contact us</a></li>
            </ul>
        </div>
    </nav>
    <div id="contactUsDiv">
        <h1>Contact Us</h1>
        <h4 id="h4ContactUs">We will get back to you as soon as possible</h4>
    </div>

    <div class="row">
        <form method="post" id="cols12">

                <div class="row">
                    <span class="input-field">
                        <input id="first_name" name="firstName" type="text" class="validate">
                        <label id="firstName" class="labels" for="first_name">First Name</label>
                    </span>
                </div>
                <div class="row">
                    <div class="input-field" >
                        <input id="last_name" name="lastName" type="text" class="validate" >
                        <label id="lastName" class="labels" for="last_name" style="top: -31px;">Last Name</label>
                    </div>
                </div>
                <div id="lastFirstError"></div>
                <div class="row">
                    <div class="input-field" id="emailDiv" >
                        <input id="email" name="email" type="text" class="validate">
                        <label id="emailLabel" class="labels" for="email"> Email</label>
                    </div>
                </div> 
                <div class="row">
                    <div class="input-field" id="phoneDiv" >
                        <input id="phone" name="phone" type="text" class="validate">
                        <label id="phoneLabel" class="labels" for="phone" style="bottom: 37px;">Phone</label>
                    </div>
                    <div id="contactInfoError"></div>
                    <div id="dummyDiv"></div>
                </div>
                <div class="row1">
                    <div class="input-field-Zip" id="zipCodeTopDiv">
                        <input id="zipCode" name="address" type="text" class="validate">
                        <label id="zipCodeLabel" class="labels" for="zipCode">Address(optional)</label>
                    </div>
                    <div id="addressError"></div>
                </div>
                <div class="row">
                    <div class="input-field" style="padding-top: 0px;">
                        <textarea id="message" name="message" cols="30" rows="10"></textarea>
                        <label id="messageLabel" class="labels" for="message">Message</label>
                    </div>
                    <div id="messageError"></div>
                </div>
                <div class="row">
                    <div id="submit">
                        <button id="submitButton" name="submit" type="submit">Submit</button>
                    
                    </div>
                </div>
        </form>
    </div>
    <script>
        <?php include "contactUs.js"; ?>
    </script>
    <script type="text/javascript">
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    </script>
</body>

</html>
<?php include "mail.php"; ?>
