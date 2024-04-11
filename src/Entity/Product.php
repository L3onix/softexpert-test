<?php

namespace App\Entity;

use App\Entity\ProductType;
use App\Entity\Entity;
use App\Repository\ProductRepository;

class Product extends Entity
{
  private ?string $name = null;
  private ?float $price = null;
  private ?ProductType $productType = null;

  function __construct()
  {
    $this->repository = new ProductRepository();
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

  public function setName(string $name)
  {
    $this->name = $name;
  }

  public function setPrice(float $price)
  {
    $this->price = $price;
  }

  public function setProductType(ProductType $productType)
  {
    $this->productType = $productType;
  }

  public function create()
  {
    $this->repository->insert($this);
  }

  public function listAll()
  {
    
  }
}
