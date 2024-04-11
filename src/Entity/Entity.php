<?php

namespace App\Entity;

use App\Repository\Repository;

class Entity
{
    protected ?Repository $repository = null;
    protected ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }
}