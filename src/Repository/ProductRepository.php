<?php

namespace App\Repository;

use App\Entity\Product;
use App\Database;
use App\Repository\Repository;

class ProductRepository extends Repository
{
    function __construct()
    {
        parent::__construct();
    }

    public function insert(Product $product): array
    {
        $sql = 'insert into products (name, price, product_type_id) values (?, ?, ?)';
        $statement = $this->connection->prepare($sql);
        $result = $this->executeStatement($statement, [
            $product->getName(),
            $product->getPrice(),
            $product->getProductType()->getId()
        ])->fetchAll();
        return $result;
    }

    public function selectAll(): array
    {
        $sql = 'select * products';
        $result = $this->executeStatement(
            $this->connection->prepare($sql),
            null
        )->fetchAll();
        return $result;
    }
}