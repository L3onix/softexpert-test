<?php

namespace App;

use PDO;
use Throwable;

class Database
{
  static public function getConnection(): PDO
  {
    $host = getenv('DB_HOST');
    $database = getenv('DB_DATABASE');
    $user = getenv('DB_USER');
    $password = getenv('DB_PASSWORD');
    try {
      $pdo = new PDO("pgsql:host=$host;dbname=$database", $user, $password);
    } catch (Throwable $error) {
      die($error);
    }
    return $pdo;
  }
}
