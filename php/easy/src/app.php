<?php
require __DIR__ . "/vendor/autoload.php";

require __DIR__ . "/classes/LegalPerson.php";
require __DIR__ . "/classes/LegalEntity.php";


use Stack\Poo\LegalEntity;
use Stack\Poo\LegalPerson;

$rob = new LegalPerson("Marilzon", "maxmaril@hotmail.com");
$robEntity = new LegalEntity("robEnterprise", "robl@hotmail.com");

dump($rob);
dump($robEntity);
?>