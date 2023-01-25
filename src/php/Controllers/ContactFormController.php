<?php
namespace App\Controllers;

include_once(SEND_WITH_PHP_MAILER);

/**
 * Summary of ContactFormController
 * Basic Contact Form which can be extended
 */
class ContactFormController
{
  public function __construct()
  {
    // save all post props?
    // save specific props only?

    // check if pot is used, if so fail
    // check inputs are not empty
    // check email is email format
    // trust user is input all other inputs in correct format
    // but don't trust they're not malicious

    foreach ($_POST as $key => $val) {
      if (isset($_POST[$key]) && !empty($_POST[$key])) {
        $this->$key = $val;
      } else {
        $this->$key = null;
      }
    }
  }
  /**
   * $fields = [
   *  ['name' => 'name', 'type' => 'string']
   * ]
   */

  public function sendContactForm()
  {
    $errors = [];
    $siteOwnerError = sendToSiteOwner();
    $confirmationError = sendConfirmationToSender();

    if ($siteOwnerError) {
      $errors['failed_submit'] = $siteOwnerError;
    }

    if ($confirmationError) {
      $errors['failed_confirmation_mail'] = $confirmationError;
    }

    if (count($errors) > 0) {
      return $errors;
    }
  }

  public function checkFields(array $fields)
  {

    $errors = [];
    foreach ($fields as $field) {
      $fieldName = $field['name'];

      // need to send through test to run (string vs email)
      if (isset($this->$fieldName) && $this->$fieldName !== null) {

        // Check if type string
        if ($field['type'] === 'string') {
          $error = $this->validateString($this->$fieldName);
          if ($error) {
            $errors[$field['type']] = $error;
          }
        }

        // Check if type email
        if ($field['type'] === 'email') {
          $error = $this->validateEmail($this->$fieldName);
          if ($error) {
            $errors[$field['type']] = $error;
          }
        }
        // Check honey pot
      } else if ($field['type'] === 'empty') {
        if (!empty($this->$fieldName)) {
          $errors[$field['type']] = $this->$fieldName . ' is not ' . $field['type'];
        }
      } else {
        $errors[$field['type']] = $fieldName . ' not found.';
      }
    }
    if (count($errors) > 0) {
      return $errors;
    }

  }

  private function validateString($input)
  {
    if (!is_string($input)) {
      return "{$input} failed validation, is not of type string";
    }
  }

  private function validateEmail($input)
  {
    // ensure this only contains one email address
    $email = explode(',', $input);
    if (count($email) > 1) {
      return "Email address is malformed";
    }

    if (!filter_var($input, FILTER_VALIDATE_EMAIL)) {
      return "{$input} failed email validation";
    }
  }

}