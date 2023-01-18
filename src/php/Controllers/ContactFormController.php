<?php

namespace App\Controllers;

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
  public function checkFields(array $fields)
  {

    $errors = [];
    foreach ($fields as $field) {
      $fieldName = $field['name'];

      // need to send through test to run (string vs email)
      if (isset($this->$fieldName) && $this->$fieldName !== null) {

        // Check if type string
        if ($field['type'] === 'string' && !is_string($this->$fieldName)) {
          $errors[] = "{$fieldName} failed validation, is not of type {$field['type']}";
        }

        // Check if type email
        if ($field['type'] === 'email' && !filter_var($this->$fieldName, FILTER_VALIDATE_EMAIL)) {
          $errors[] = "{$fieldName} failed validation, is not of type {$field['type']}";
        }
        // Check honey pot
      } else if ($field['type'] === 'empty') {
        if (!empty($this->$fieldName)) {
          $errors[] = $this->$fieldName . ' is not ' . $field['type'];
        }
      } else {
        $errors[] = $fieldName . ' not found.';
      }
    }

    return $errors;
  }


}