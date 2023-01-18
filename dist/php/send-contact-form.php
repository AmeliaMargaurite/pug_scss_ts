<?php
function sendContactForm()
{
  $siteOwnerErrors = sendToSiteOwner();
  $confirmationErrors = sendConfirmationToSender();

  return [...$siteOwnerErrors, ...$confirmationErrors];
}

function sendToSiteOwner()
{
  $errors = [];
  $sender_name = htmlspecialchars($_POST['name']);
  $sender_email = htmlspecialchars($_POST['email']);
  $sender_message = htmlspecialchars($_POST['message']);


  $to = $_ENV['SITE_EMAIL'];
  $subject = "Site message from $sender_name";
  $headers = [
    'From' => $_ENV['MAIL_FROM'],
    'Reply-To' => $sender_email,
    'MIME-Version: 1.0',
    'Content-type' => 'text/html; charset=iso-8859-1'
  ];

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

  if (IS_LIVE) {
    $success = mail($to, $subject, $message, $headers);

    if (!$success) {
      $errors[] = error_get_last()['message'];

      return $errors;
    }
    return $errors;
  } else {
    return $errors;
  }
}

function sendConfirmationToSender()
{
  $errors = [];

  $sender_name = htmlspecialchars($_POST['name']);
  $sender_email = htmlspecialchars($_POST['email']);
  $sender_message = htmlspecialchars($_POST['message']);

  $to = $sender_email;
  $site_name = $_ENV['SITE_NAME'];
  $subject = "Confirmation of form submitted on $site_name.";
  $headers = [
    'From' => $_ENV['MAIL_FROM'],
    'MIME-Version: 1.0',
    'Content-type' => 'text/html; charset=iso-8859-1'
  ];

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

  if (IS_LIVE) {
    $success = mail($to, $subject, $message, $headers);

    if (!$success) {
      $errors[] = error_get_last()['message'];
      return $errors;
    }
    return $errors;
  } else {
    return $errors;
  }
}