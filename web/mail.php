<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'C:\xampp\htdocs\mail\PHPMailer-master\src\Exception.php';
require 'C:\xampp\htdocs\mail\PHPMailer-master\src\PHPMailer.php';
require 'C:\xampp\htdocs\mail\PHPMailer-master\src\SMTP.php';

$mail = new PHPMailer(true);
$alert = '';
if (isset($_POST['submit'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email= $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $message= $_POST['message'];


    try {
        $mail ->isSMTP();
        $mail ->Host = "smtp.gmail.com";
        $mail ->SMTPAuth = true;
        $mail ->Username = "aframazer@gmail.com";
        $mail ->Password = "loveazer2";
        $mail ->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail ->Port = "587";

           

        $mail ->setFrom("aframazer@gmail.com");
        $mail ->addAddress("aframazer@gmail.com");
        if (isset($_POST['address']) && strlen($_POST['address'])) {
            $mail ->isHTML(true);
            $mail ->Subject = "Message";

            $mail ->Body = $image . "<h2> Message from $firstName $lastName </h2>" . "<br>Email: " .$email . "<br>Phone: " .$phone . "<br>Address: " .$address . "<br>Message: " .$message;
        }
        else {
            $mail ->isHTML(true);
            $mail ->Subject = "Message";
            $mail ->Body = "Name: " .$firstName . " " .$lastName . "<br>Email: " .$email . "<br>Phone: " .$phone .  "<br>Message: " .$message;
        }
        $mail ->send();
        $alert = '<div class="alert-success">
                    <span>Message Sent! Thank you!</span>
                </div>';
    }
    catch (Exception $e) {
        $alert = '<div class="alert-error">
                    <span>'.$e ->getMessage().'</span>
                    </div>';
    }

}

