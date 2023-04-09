<?php

declare(strict_types=1);
namespace Stack\Poo;

class LegalPerson
{
  const OBJECT_TYPE = 'Customer';
  private static string $name;
  private string $email;

  public function __construct(string $name, string $email)
  {
    self::$name = $name;
    $this->email = $email;
  }

  public function getName(): string
  {
    return $this->name;
  }

  public function setName(string $name): void
  {
    $this->name = $name;
  }
  public function getEmail(): string
  {
    return $this->email;
  }

  public static function getInfo(): string
  {
    return self::$name . " - " . self::OBJECT_TYPE;
  }
}

?>