<?php

namespace App\Entity;

use App\Entity\ProductType;

class Product
{
  private ?int $id = null;
  private ?string $name = null;
  private ?float $price = null;
  private ?ProductType $productType = null;

  public function getId(): ?int
  {
    return $this->id;
  }

  public function getName(): ?string
  {
    return $this->name;
  }

  public function getPrice(): ?float
  {
    return $this->price;
  }

  public function getProductType(): ?ProductType
  {
    return $this->productType;
  }
}
