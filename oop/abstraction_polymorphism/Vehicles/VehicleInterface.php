<?php

namespace Vehicles;

interface VehicleInterface
{
    public function drive(int $distance): string;

    public function refuel(int $liters): void;
}