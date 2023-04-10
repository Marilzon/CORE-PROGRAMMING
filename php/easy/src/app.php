<?php
require __DIR__ . "/vendor/autoload.php";

require __DIR__ . "/classes/LegalPerson.php";
require __DIR__ . "/classes/LegalEntity.php";

use Stack\Poo\LegalEntity;
use Stack\Poo\LegalPerson;


$rob = new LegalPerson("Marilzon", "maxmaril@hotmail.com", "M");
dump($rob);

$robEntity = new LegalEntity("Marilzon", "maxmaril@hotmail.com", "-");

if ($robEntity instanceof LegalPerson) {
  dump(var: "\$robEntity is a instanceof LegalPerson");
} else {
  dump(var: "\$robEntity i'snt instanceof LegalPerson");
}

?>