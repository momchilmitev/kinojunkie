<?php

interface Writable
{
    /**
     * @param string $text
     * @throws Exception
     */
    public function writeText(string $text): void;
}

interface Chargeable
{
    public function useInk(int $quantity): void;

    public function getInk(): int;
}

interface WriterInterface extends Writable, Chargeable
{
}

interface ElectricalDeviceInterface
{
    public function getUsage(): int;

    public function isPlugged(): bool;

    public function plug(): void;
}

interface Consumable
{
    public function isAvailable(): bool;
}

abstract class AbstractWriter implements WriterInterface
{
    private int $ink;
    private int $modifier;

    public function __construct(int $ink, int $modifier)
    {
        $this->ink = $ink;
        $this->modifier = $modifier;
    }

    public function writeText(string $text): void
    {
        if ($this->getInk() > 0) {
            $this->useInk(strlen($text) * $this->modifier);
            echo $text;
        }

        throw new Exception("Not enough ink!");
    }

    public function useInk(int $quantity): void
    {
        $this->ink -= $quantity;
    }

    public function getInk(): int
    {
        return $this->ink;
    }
}

class Printer extends AbstractWriter implements ElectricalDeviceInterface
{
    const INK_MODIFIER = 5;

    /**
     * @var bool
     */
    private bool $isPlugged;

    public function __construct(int $ink, bool $isPlugged)
    {
        parent::__construct($ink, self::INK_MODIFIER);
        $this->isPlugged = $isPlugged;
    }

    public function getUsage(): int
    {
        return 300;
    }

    public function isPlugged(): bool
    {
        return $this->isPlugged;
    }

    public function plug(): void
    {
        $this->isPlugged = true;
    }
}

class Pen extends AbstractWriter implements Consumable
{
    const INK_MODIFIER = 1;

    public function __construct(int $ink)
    {
        parent::__construct($ink, self::INK_MODIFIER);
    }

    public function isAvailable(): bool
    {
        return true;
    }
}

function plug(ElectricalDeviceInterface $device)
{
    if (!$device->isPlugged()) {
        $device->plug();
    }
}

function rechargeInk(WriterInterface $writer)
{
    if ($writer->getInk() < 5) {
        $writer->useInk(-100);
    }
}

rechargeInk(new Pen(50));
rechargeInk(new Printer(50, true));

plug(new Printer(50, true));
//plug(new Pen(50));
