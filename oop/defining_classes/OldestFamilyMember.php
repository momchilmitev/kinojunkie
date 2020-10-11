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
    private int $age;

    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return int
     */
    public function getAge(): int
    {
        return $this->age;
    }

    public function __toString(): string
    {
        return $this->getName() . ' ' . $this->getAge();
    }
}

class Family
{
    /**
     * @var array
     */
    private array $members;

    /**
     * @var ?Person
     */
    private ?Person $oldestMember;

    public function __construct()
    {
        $this->members = [];
        $this->oldestMember = null;
    }

    /**
     * @param string $name
     * @param int $age
     */
    public function addMember(string $name, int $age): void
    {
        $newMember = new Person($name, $age);

        if (null === $this->oldestMember || $newMember->getAge() > $this->oldestMember->getAge()) {
            $this->oldestMember = $newMember;
        }

        $this->members[] = $newMember;
    }

    /**
     * @return Person
     */
    public function getOldestMember(): ?Person
    {
        return $this->oldestMember;
    }
}

$n = intval(readline());
$family = new Family();

while ($n--) {
    list($name, $age) = explode(' ', readline());
    $family->addMember($name, $age);
}

if (null !== $family->getOldestMember()) {
    echo $family->getOldestMember();
} else {
    echo "There is no oldest member";
}
