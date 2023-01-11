<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->ISHTML (true);

$mail->setFrom('myEmail@test.co', 'Test letter lunaria');
$mail->addAddress('myEmail@test.co');
$mail->Subject = 'Test lunaria subject'


//letter body
$body = '<h1>Lunario works!</h1>';

if(trim(!empty($_POST['name']))){
 $body.= '<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))){
 $body.= '<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['price']))){
 $body.= '<p><strong>Price:</strong> '.$_POST['price'].'</p>';
}

if(trim(!empty($_POST['message']))){
 $body.= '<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

//send
if (!$mail->send()) {
$message = 'Error';
} else {
$message = 'Your data is sent! ';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>