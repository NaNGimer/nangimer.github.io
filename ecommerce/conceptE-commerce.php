<?php

$to = 'gimernahuel@outlook.com';
$name = $_POST['name']
$visitor = $_POST['email']
$subject = $_POST['subject']
$message = $_POST['message']

$header = ("De nasi");

mail($to, $name, $visitor, $subject, $message);
?>
