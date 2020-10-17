<?php

namespace Factories;

interface VehicleFactoryInterface
{
    /**
     * @param string $type
     * @param float $quantity
     * @param float $consumption
     * @throws \Exception
     * @return \Vehicles\VehicleInterface
     */
    public function create(string $type, float $quantity, float $consumption): \Vehicles\VehicleInterface;
}