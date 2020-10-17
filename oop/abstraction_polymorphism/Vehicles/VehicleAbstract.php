<?php

namespace Vehicles;

abstract class VehicleAbstract implements VehicleInterface
{
    private float $fuelQuantity;

    private float $fuelConsumption;

    private float $modifier;

    /**
     * VehicleAbstract constructor.
     * @param float $fuelQuantity
     * @param float $fuelConsumption
     * @param float $modifier
     */
    public function __construct(float $fuelQuantity, float $fuelConsumption, float $modifier)
    {
        $this->fuelQuantity = $fuelQuantity;
        $this->modifier = $modifier;
        $this->fuelConsumption = $fuelConsumption + $this->modifier;
    }


    public function drive(int $distance): string
    {
        $name = explode('\\', get_class($this));
        $name = end($name);

        if ($this->fuelQuantity >= $this->fuelConsumption * $distance) {
            $this->fuelQuantity -= $this->fuelConsumption * $distance;
            return $name . " travelled " . $distance . " km" . PHP_EOL;
        }

        return $name . " needs refueling" . PHP_EOL;
    }

    public function refuel(int $liters): void
    {
        $this->fuelQuantity += $liters;
    }

    public function __toString(): string
    {
        $name = explode('\\', get_class($this));
        return end($name) . ": " . number_format($this->fuelQuantity, 2) . PHP_EOL;
    }
}