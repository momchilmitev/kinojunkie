<?php

class Box
{
    /**
     * @var float
     */
    private float $length;

    /**
     * @var float
     */
    private float $width;

    /**
     * @var float
     */
    private float $height;

    /**
     * Box constructor.
     * @param float $length
     * @param float $width
     * @param float $height
     */
    public function __construct(float $length, float $width, float $height)
    {
        $this->setLength($length);
        $this->setWidth($width);
        $this->setHeight($height);
    }

    /**
     * @return float
     */
    public function getLength(): float
    {
        return $this->length;
    }

    /**
     * @param float $length
     * @throws Exception
     */
    private function setLength(float $length): void
    {
        $this->validateVariable($length, 'Length');
        $this->length = $length;
    }

    /**
     * @return float
     */
    public function getWidth(): float
    {
        return $this->width;
    }

    /**
     * @param float $width
     * @throws Exception
     */
    public function setWidth(float $width): void
    {
        $this->validateVariable($width, 'Width');
        $this->width = $width;
    }

    /**
     * @return float
     */
    public function getHeight(): float
    {
        return $this->height;
    }

    /**
     * @param float $height
     * @throws Exception
     */
    public function setHeight(float $height): void
    {
        $this->validateVariable($height, 'Height');
        $this->height = $height;
    }

    /**
     * @return float
     */
    private function getVolume(): float
    {
        return  $this->getLength() * $this->getWidth() * $this->getHeight();
    }

    /**
     * @return float
     */
    private function getLateralSurfaceArea(): float
    {
        return 2 * ($this->getLength() * $this->getHeight()) + 2 * ($this->getWidth() * $this->getHeight());
    }

    /**
     * @return float
     */
    private function getSurfaceArea(): float
    {
        return 2 * ($this->getLength() * $this->getWidth()) +
                2 * ($this->getLength() * $this->getHeight()) +
                2 * ($this->getWidth() * $this->getHeight());
    }

    /**
     * @param float $value
     * @param string $name
     * @throws Exception
     */
    private function validateVariable(float $value, string $name): void
    {
        if ($value <= 0) {
            throw new Exception("{$name} cannot be zero or negative.");
        }
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        $volume = number_format($this->getVolume(), 2, '.', '');
        $lateralSurfaceArea = number_format($this->getLateralSurfaceArea(), 2, '.', '');
        $surfaceArea = number_format($this->getSurfaceArea(), 2, '.', '');

        return "Surface Area - {$surfaceArea}\nLateral Surface Area - {$lateralSurfaceArea}\nVolume - {$volume}";
    }
}

$length = floatval(readline());
$width = floatval(readline());
$height = floatval(readline());

try {
    $box = new Box($length, $width, $height);
    echo $box;
} catch (Exception $e) {
    echo $e->getMessage();
}
