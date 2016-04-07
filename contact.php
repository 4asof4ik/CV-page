<?php

$recepient = "morfey.by@gmail.com";
$sitename = "Portfolio";

$full_name = trim($_POST["full_name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Name: $full_name \n Phone: $phone \n Email: $email";

$pagetitle = "New message \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");