<?php

require __DIR__ . "/vendor/autoload.php";
require_once __DIR__ . "/classes/LegalPerson.php";

use Stack\Poo\LegalPerson;

$max = new LegalPerson(
  name: "Marilzon",
  email: "maxmaril@hotmail.com"
);

dump($max);

$max->setName(name: "Sousa");

dump($max);
dump($max::getInfo());
?>