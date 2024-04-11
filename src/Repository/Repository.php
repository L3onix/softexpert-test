<?php

namespace App\Repository;

use App\Database;
use PDO;
use PDOStatement;
use Throwable;

class Repository
{
    protected ?PDO $connection = null;

    function __construct()
    {
        $this->connection = Database::getConnection();
    }

    protected function executeStatement(PDOStatement $statement, array|null $params): PDOStatement
    {
        try{
            $statement->execute($params);
        }catch(Throwable $error) {
            die($error);
        }
        return $statement;
    }
}