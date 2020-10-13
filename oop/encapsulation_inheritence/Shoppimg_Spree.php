<?php

class Person
{
    /**
     * @var string
     */
    private string $name;

    /**
     * @var int
     */
    private int $money;

    /**
     * @var Product[]
     */
    private array $products;

    /**
     * Person constructor.
     * @param string $name
     * @param int $money
     * @throws Exception
     */
    public function __construct(string $name, int $money)
    {
        $this->setName($name);
        $this->setMoney($money);
        $this->products = [];
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @throws Exception
     */
    private function setName(string $name): void
    {
        if (empty($name)) {
            throw new Exception("Name cannot be empty");
        }

        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getMoney(): int
    {
        return $this->money;
    }

    /**
     * @param int $money
     * @throws Exception
     */
    private function setMoney(int $money): void
    {
        if ($money < 0) {
            throw new Exception("Money cannot be negative");
        }

        $this->money = $money;
    }

    /**
     * @return array|Product[]
     */
    public function getProducts(): array
    {
        return $this->products;
    }

    /**
     * @param Product $product
     */
    private function addProduct(Product $product): void
    {
        $this->products[] = $product;
    }

    /**
     * @param Product $product
     * @return bool
     */
    private function canAffordAProduct(Product $product): bool
    {
        return $product->getPrice() > $this->getMoney();
    }

    /**
     * @param Product $product
     * @throws Exception
     */
    public function buyProduct(Product $product): void
    {
        if ($this->canAffordAProduct($product)) {
            throw new Exception("{$this->getName()} can't afford {$product->getName()}");
        }

        $this->setMoney($this->getMoney() - $product->getPrice());
        $this->addProduct($product);
        echo "{$this->getName()} bought {$product->getName()}\n";
    }
}

class Product
{
    /**
     * @var string
     */
    private string $name;

    /**
     * @var int
     */
    private int $price;

    /**
     * Product constructor.
     * @param string $name
     * @param int $price
     */
    public function __construct(string $name, int $price)
    {
        $this->setName($name);
        $this->setPrice($price);
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    private function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getPrice(): int
    {
        return $this->price;
    }

    /**
     * @param int $price
     */
    private function setPrice(int $price): void
    {
        $this->price = $price;
    }

    public function __toString(): string
    {
        return $this->getName();
    }

}

$personData = preg_split("/[=;]/", readline(), -1, PREG_SPLIT_NO_EMPTY);

$people = [];

for ($i = 0; $i < count($personData) - 1; $i += 2) {
    $personName = $personData[$i];
    $personMoney = $personData[$i + 1];

    try {
        $people[$personName] = new Person($personName, $personMoney);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

$productsData = preg_split("/[=;]/", readline(), -1, PREG_SPLIT_NO_EMPTY);

$products = [];

for ($i = 0; $i < count($productsData) - 1; $i += 2) {
    $productName = $productsData[$i];
    $productMoney = $productsData[$i + 1];

    try {
        $products[$productName] = new Product($productName, $productMoney);
    } catch (Exception $e) {
        echo $e->getMessage() . "\n";
    }
}

$input = readline();
while ($input != "END") {
    list($personName, $productName) = explode(" ", $input);

    if (array_key_exists($personName, $people) && array_key_exists($productName, $products)) {
        try {
            $people[$personName]->buyProduct($products[$productName]);
        } catch (Exception $e) {
            echo $e->getMessage() . "\n";
        }
    }

    $input = readline();
}

foreach ($people as $person) {
    if (count($person->getProducts()) === 0) {
        echo "{$person->getName()} - Nothing bought\n";
    }

    echo "{$person->getName()} - " . implode(",", $person->getProducts()) . "\n";
}