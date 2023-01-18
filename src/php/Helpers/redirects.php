<?php
function redirectTo(string $path)
{
  header('Location: ' . $path);
}