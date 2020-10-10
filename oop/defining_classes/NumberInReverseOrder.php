<?php

class DigitalNumber
{
    /**
     * @var string
     */
    private string $value;

    private $reversed;

    public function __construct(string $value)
    {
        $this->value = $value;
        $this->reversed = null;
    }

    public function printReversed(): void
    {
        if (null !== $this->reversed) {
            echo  $this->reversed;
        } else {
            echo $this->reversed = strrev($this->value) . PHP_EOL;
        }

//        for ($i = strlen($this->value) - 1; $i >= 0; $i--) {
//            echo $this->value[$i];
//        }
//
//        echo PHP_EOL;
    }

}

$n = readline();
$num = new DigitalNumber($n);
$num->printReversed();
