<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();
    //Tell PHPMailer to use SMTP
    $mail->isSMTP();
    //Set the hostname of the mail server
    $mail->Host = 'email-smtp.us-east-1.amazonaws.com';
    //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
    // I tried PORT 25, 465 too
    $mail->Port = 587;
    //Set the encryption system to use - ssl (deprecated) or tls
    $mail->SMTPSecure = 'tls';
    //Whether to use SMTP authentication
    $mail->SMTPAuth = true;
    //Username to use for SMTP authentication - use full email address for gmail
    $mail->Username = "AKIAJ2JDIDV5G2TRZ5FQ";
    //Password to use for SMTP authentication
    $mail->Password = "AqnWqoaSqFR0M6P06cFdZz+0QrtyglBHtKGIKVCUmrbK";

    $mail->From = 'homepage@fatcatgaming.com';
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('enquiries@fatcatgaming.com'); //recipient 
    $mail->Subject = $_POST['inputSubject'];
    $mail->Body = "e-mail: " . $_POST['inputEmail'] . "\r\n\r\nName: " . $_POST['inputName'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}