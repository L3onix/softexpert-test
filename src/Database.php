<?php

namespace App;

use PDO;
use Throwable;

class Database
{
  static public function getConnection(): PDO
  {
    $host = $_ENV['DB_HOST'];
    $database = $_ENV['DB_DATABASE'];
    $user = $_ENV['DB_USER'];
    $password = $_ENV['DB_PASSWORD'];
    try {
      $pdo = new PDO("pgsql:host=$host;dbname=$database", $user, $password);
    } catch (Throwable $error) {
      die($error);
    }
    return $pdo;
  }
}
