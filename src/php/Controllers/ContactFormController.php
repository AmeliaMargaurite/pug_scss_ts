<?php
namespace App\Controllers;

include_once(dirname(__DIR__, 1) . '/config.php');
include_once(SEND_WITH_PHP_MAILER);

/**
 * Summary of ContactFormController
 * Basic Contact Form which can be extended
 */
class ContactFormController
{
  public function __construct()
  {
    // check if pot is used, if so fail
    // check inputs are not empty
    // check email is email format
    // trust user is input all other inputs in correct format
    // but don't trust they're not malicious

    foreach ($_POST as $key => $val) {
      if (isset($_POST[$key]) && !empty($_POST[$key])) {
        $this->$key = $val;
        $_SESSION['contact_form'][$key] = $val;

      } else {
        $this->$key = null;
        $_SESSION['contact_form'][$key] = null;
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
    // $confirmationError = sendConfirmationToSender();

    if ($siteOwnerError) {
      $errors['failed_submit'] = $siteOwnerError;
    }

    // if ($confirmationError) {
    //   $errors['failed_confirmation_mail'] = $confirmationError;
    // }

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
          $error = $this->validateString($this->$fieldName, $fieldName);
          if ($error) {
            // use fieldName (which is also the input id) as key to allow 
            // error warnings to appear
            $errors[$fieldName] = $error;
          }
        }

        if ($field['type'] === 'string_array') {
          $error = $this->validateStringArray($this->$fieldName, $fieldName);
          if ($error) {
            $errors[$fieldName] = $error;
          }
        }

        // Check if type email
        if ($field['type'] === 'email') {
          $error = $this->validateEmail($this->$fieldName, $fieldName);
          if ($error) {
            // use fieldName (which is also the input id) as key to allow 
            // error warnings to appear
            $errors[$fieldName] = $error;
          }
        }
        // Check honey pot
      } else if ($field['type'] === 'empty') {
        if (!empty($this->$fieldName)) {
          // use fieldName (which is also the input id) as key to allow 
          // error warnings to appear
          $errors[$fieldName] = $fieldName . ' is not ' . $field['type'];
        }
      } else if ($field['required'] === true) {
        // use fieldName (which is also the input id) as key to allow 
        // error warnings to appear
        $errors[$fieldName] = $fieldName . ' not found.';
      }
    }
    if (count($errors) > 0) {
      return $errors;
    }

  }

  private function validateString($input, $fieldName)
  {
    $pattern = "/[\[\]\=\<\>`]/m";
    if (!is_string($input) || preg_match_all($pattern, $input)) {
      return "{$fieldName} failed validation";
    }
  }

  private function validateStringArray($array, $fieldName)
  {
    foreach ($array as $key => $val) {
      if ($key === $val) {
        $error = $this->validateString($val, $fieldName);
        if ($error) {
          return $error;
        }
      }
    }
  }

  private function validateEmail($input, $fieldName)
  {
    // ensure this only contains one email address
    $email = explode(',', $input);
    if (count($email) > 1) {
      return "Email address is malformed";
    }

    if (!filter_var($input, FILTER_VALIDATE_EMAIL)) {
      return "{$fieldName} failed email validation";
    }
  }

}