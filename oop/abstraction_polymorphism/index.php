<?php

spl_autoload_register(function ($class) {
    require_once str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
});

$vehicles = [];
$factory = new \Factories\VehicleFactory();

for ($i = 0; $i < 2; $i++) {
    list($type, $quantity, $consumption) = explode(' ', readline());
    $vehicle = $factory->create($type, $quantity, $consumption);
    $vehicles[$type] = $vehicle;
}

$n = readline();

for ($i = 0; $i < $n; $i++) {
    list($action, $type, $param) = explode(" ", readline());
    $vehicle = $vehicles[$type];
    $action = strtolower($action);
    echo $vehicle->$action($param);
}

foreach ($vehicles as $vehicle) {
    echo $vehicle;
}