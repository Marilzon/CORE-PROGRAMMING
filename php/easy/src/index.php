<?php

require __DIR__ . "/vendor/autoload.php";
require_once __DIR__ . "/classes/LegalPerson.php";

use Stack\Poo\LegalPerson;

$max = new LegalPerson("Marilzon", "maxmaril@hotmail.com");

dump($max->getName());

$max->name = "Marilzonnnnn";
$max->setName(name:"Sousa");

dump($max->getName());
