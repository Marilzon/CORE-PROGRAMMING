<?php
declare(strict_types=1);
namespace Stack\Poo;

abstract class Person
{
  public string $name;
  public string $email;

  public function __construct(string $name, string $email)
  {
    $this->name = $name;
    $this->email = $email;
  }

  public function getName(): string
  {
    return $this->name;
  }
}

?>