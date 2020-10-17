<?php

namespace Factories;

class VehicleFactory implements \Factories\VehicleFactoryInterface
{

    public function create(string $type, float $quantity, float $consumption): \Vehicles\VehicleInterface
    {
        $className = 'Vehicles\\' . $type;

        if (!class_exists($className)) {
            throw new \Exception("Invalid vehicle type");
        }

        return new $className($quantity, $consumption);
    }
}