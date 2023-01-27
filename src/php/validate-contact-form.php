<?php

use App\Controllers\ContactFormController;


include_once('./config.php');

function exitWithFailure(array $messages)
{
  $url = $_SERVER['REQUEST_URI'];
  $url_parts = parse_url($url);
  parse_str($url_parts['query'], $params);

  $buildQueries = null;

  foreach ($messages as $key => $message) {
    if ($buildQueries) {
      $buildQueries .= '&' . $key . '=' . $message;
    } else {
      $buildQueries = '?' . $key . '=' . $message;
    }
    error_log($message, 0);
    var_dump($message);
  }

  $url = $params['back'] ? $params['back'] : '/error';

  if ($buildQueries) {
    $url .= $buildQueries;
  }

  redirectTo($url);
}

if (
  $_SERVER['REQUEST_METHOD'] === 'POST'
  && isset($_POST['submit'])
  && !empty($_POST['submit'])
) {

  $contact_form = new ContactFormController();
  $errors = $contact_form->checkFields([
    ['name' => 'pot', 'type' => 'empty', 'required' => false],
    ['name' => 'name', 'type' => 'string', 'required' => true],
    ['name' => 'email', 'type' => 'email', 'required' => true],
    ['name' => 'message', 'type' => 'string', 'required' => true],
    ['name' => 'subject', 'type' => 'string', 'required' => false],
    ['name' => 'package-type', 'type' => 'string', 'required' => false]
  ]);

  if ($errors && count($errors) > 0) {
    exitWithFailure($errors);
  } else {
    $sendContactForm_errors = $contact_form->sendContactForm();

    if ($sendContactForm_errors && count($sendContactForm_errors) > 0) {
      $errors += $sendContactForm_errors;
      exitWithFailure($errors);

    } else {
      redirectTo('/confirmation');
    }
  }
} else {
  exitWithFailure(['Form submitted incorrectly']);
}