<?php

namespace App\Entity;

use App\Entity\Entity;

class ProductTypeTax extends Entity
{
    private ?string $name = null;
    private ?float $percentValue = null;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getPercentValue(): ?float
    {
        return $this->percentValue;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function setPercentValue(float $percentValue)
    {
        $this->percentValue = $percentValue;
    }
}