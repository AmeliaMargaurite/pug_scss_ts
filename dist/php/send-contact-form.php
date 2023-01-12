<?php
include_once('./config.php');
function sendContactForm(string $sender_name, string $sender_email, string $sender_message)
{
  $sanitized_sender_name = htmlspecialchars($sender_name);
  $sanitized_sender_email = htmlspecialchars($sender_email);
  $sanitized_sender_message = htmlspecialchars($sender_message);

  sendToSiteOwner($sanitized_sender_name, $sanitized_sender_email, $sanitized_sender_message);
  sendConfirmationToSender($sanitized_sender_name, $sanitized_sender_email, $sanitized_sender_message);
}

function sendToSiteOwner(string $sender_name, string $sender_email, string $sender_message)
{
  $to = $_ENV['SITE_EMAIL'];
  $subject = "Site message from $sender_name";
  $headers = array('From' => $_ENV['SITE_NAME'], 'Reply-To' => $sender_email);

  $message = "
    <html>
      <head>
        <title>$subject</title>
      </head>

      <body>
        <p>The following message was submitted from $sender_name.</p>
        <p>
          <em>
            $sender_message
          </em>
        </p>
      </body>
    </html>
  ";

  $success = mail($to, $subject, $message, $headers);

  if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo htmlspecialchars($errorMessage);
  } else {
    echo 'success, send to site owner';
  }
}

function sendConfirmationToSender(string $sender_name, string $sender_email, string $sender_message)
{
  $to = $sender_email;
  $site_name = $_ENV['SITE_NAME'];
  $subject = "Confirmation of form submitted on $site_name.";
  $headers = array('From' => $_ENV['SITE_NAME']);

  $message = "
    <html>
      <head>
        <title>$subject</title>
      </head>

      <body>
        <p>Hi $sender_name, 
        <p>You submitted the following form on $site_name.</p>
        <p>
          <em>
            $sender_message
          </em>
        </p>
        <p>We will get back to you with a reply within 1-3 business days</p>
      </body>
    </html>
  ";

  $success = mail($to, $subject, $message, $headers);

  if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo htmlspecialchars($errorMessage);
  } else {
    echo 'success, send confirmation to sender';
  }
}