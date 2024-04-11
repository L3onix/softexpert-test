<?php

namespace App\Entity;

use App\Entity\Entity;

class ProductType extends Entity
{
    private ?string $name = null;
    private array $productTypeTaxes = array();

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getProductTypeTaxes(): array
    {
        return $this->productTypeTaxes;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function setProductTypeTaxes(array $productTypeTaxes)
    {
        $this->productTypeTaxes = $productTypeTaxes;
    }
}