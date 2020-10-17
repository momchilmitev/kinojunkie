<?php

namespace Vehicles;

class Car extends \Vehicles\VehicleAbstract
{
    const FUEL_MODIFIER = 0.9;

    /**
     * Car constructor.
     * @param float $fuelQuantity
     * @param float $fuelConsumption
     */
    public function __construct(float $fuelQuantity, float $fuelConsumption)
    {
        parent::__construct($fuelQuantity, $fuelConsumption, self::FUEL_MODIFIER);
    }
}