<?php
include_once('./config.php');
include_once('./send-contact-form.php');
function exitWithFailure($message)
{
  echo 'Error: ' . $message;

}

var_dump($_ENV);

if (
  $_SERVER['REQUEST_METHOD'] === 'POST'
  && isset($_POST['submit'])
  && !empty($_POST['submit'])
) {
  $error = false;

  // Check honey pot first
  if (isset($_POST['pot']) && !empty($_POST['pot'])) {
    exitWithFailure('Pot was filled');
  }

  // Validate name
  if (!empty($_POST['name']) && is_string($_POST['name'])) {
    $name = $_POST['name'];
  } else {
    exitWithFailure('Name input failed');
  }

  // Validate email
  if (!empty($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    if ($email === false) {
      exitWithFailure('Email failed validation');
    }

  } else {
    exitWithFailure('Email input failed');
  }

  // Validate message
  if (!empty($_POST['message']) && is_string($_POST['message'])) {
    $message = $_POST['message'];
  } else {
    exitWithFailure('Message input failed');
  }

  if ($name && $email && $message) {
    sendContactForm($name, $email, $message);
  }

} else {
  exitWithFailure('Form submitted incorrectly');
}