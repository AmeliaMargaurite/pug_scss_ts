<?php

use App\Controllers\ContactFormController;


include_once('./config.php');

include_once('./send-contact-form.php');
function exitWithFailure(array $messages)
{
  $url = $_SERVER['REQUEST_URI'];
  $url_parts = parse_url($url);
  parse_str($url_parts['query'], $params);

  foreach ($messages as $message) {
    error_log($message, 0);
  }

  if (isset($params['back'])) {
    redirectTo($params['back']);

    // Have to set up custom error handling
    // Save errors to $_SESSION? send to html page via url params?


  } else
    redirectTo('/error');



}

if (
  $_SERVER['REQUEST_METHOD'] === 'POST'
  && isset($_POST['submit'])
  && !empty($_POST['submit'])
) {

  $contact_form = new ContactFormController();
  $errors = $contact_form->checkFields([
    ['name' => 'pot', 'type' => 'empty'],
    ['name' => 'name', 'type' => 'string'],
    ['name' => 'email', 'type' => 'email'],
    ['name' => 'message', 'type' => 'message']
  ]);

  if (count($errors) <= 0) {
    $sendContactForm_errors = sendContactForm();

    if (count($sendContactForm_errors) <= 0) {
      redirectTo('/confirmation');
    } else
      $errors .= $sendContactForm_errors;
  }

  exitWithFailure($errors);
} else {
  exitWithFailure(['Form submitted incorrectly']);
}