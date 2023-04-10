<?php

declare(strict_types=1);
namespace Stack\Poo;

class LegalPerson
{
  private static string $name;
  private string $email;
  private string $gender;

  public function __construct(string $name, string $email, string $gender)
  {
    self::$name = $name;
    $this->email = $email;
    $this->gender = $gender;
  }

  public function getName(): string
  {
    return self::$name;
  }

  public function setName(string $name): void
  {
    $this->name = $name;
  }
  public function getEmail(): string
  {
    return $this->email;
  }
}

?>