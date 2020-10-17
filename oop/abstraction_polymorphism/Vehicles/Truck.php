<?php

namespace Vehicles;

class Truck extends \Vehicles\VehicleAbstract
{
    const FUEL_MODIFIER = 1.6;
    const REFUEL_MODIFIER = 0.95;

    /**
     * Car constructor.
     * @param float $fuelQuantity
     * @param float $fuelConsumption
     */
    public function __construct(float $fuelQuantity, float $fuelConsumption)
    {
        parent::__construct($fuelQuantity, $fuelConsumption, self::FUEL_MODIFIER);
    }

    public function refuel(int $liters): void
    {
        parent::refuel($liters * self::REFUEL_MODIFIER);
    }
}