<?php

class Trainer
{
    /**
     * @var string
     */
    private string $name;

    /**
     * @var int
     */
    private int $badges;

    /**
     * @var Pokemon[][]
     */
    private array $pokemons;

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->badges = 0;
        $this->pokemons = [];
    }

    /**
     * @return int
     */
    public function getBadges(): int
    {
        return $this->badges;
    }

    /**
     * @param Pokemon $pokemon
     */
    public function catchPokemon(Pokemon $pokemon): void
    {
        $this->pokemons[$pokemon->getElement()][] = $pokemon;
    }

    public function receiveBadge(): void
    {
        $this->badges++;
    }

    /**
     * @param string $element
     * @return bool
     */
    public function hasPokemonsByElement(string $element): bool
    {
        return key_exists($element, $this->pokemons) && count($this->pokemons[$element]);
    }

    public function hitPokemons(int $dmg): void
    {
        foreach ($this->pokemons as $type => $pokemonsByType) {
            foreach ($pokemonsByType as $key => $pokemon) {
                $pokemon->hitPokemon($dmg);
                if (!$pokemon->isAlive()) {
                    unset($this->pokemons[$type][$key]);
                }
            }
        }
    }

    public function __toString(): string
    {
        $pokemonCount = 0;

        foreach ($this->pokemons as $pokemonsByType) {
            $pokemonCount += count($pokemonsByType);
        }

        return $this->name . ' ' . $this->badges . ' ' . $pokemonCount;
    }
}

class Pokemon
{
    /**
     * @var string
     */
    private string $name;
    /**
     * @var string
     */
    private string $element;
    /**
     * @var int
     */
    private int $health;

    public  function __construct($name, $element, $health)
    {
        $this->name = $name;
        $this->element = $element;
        $this->health = $health;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getElement(): string
    {
        return $this->element;
    }

    /**
     * @return int
     */
    public function getHealth(): int
    {
        return $this->health;
    }

    public function isAlive(): bool
    {
        return $this->getHealth() > 0;
    }

    public function hitPokemon(int $dmg): void
    {
        $this->health -= max(0, $dmg);
    }
}

/**
 * @var Trainer[] $trainers
 */
$trainers = [];

$line = readline();

while ($line != 'Tournament') {
    list($trainerName, $pokemonName, $element, $health) = explode(' ', $line);

    if (!key_exists($trainerName, $trainers)) {
        $trainers[$trainerName] = new Trainer($trainerName);
    }

    $trainer = $trainers[$trainerName];
    $trainer->catchPokemon(new Pokemon($pokemonName, $element, $health));

    $line = readline();
}

$line = readline();

while ($line != 'End') {
    foreach ($trainers as $trainer) {
        if ($trainer->hasPokemonsByElement($line)) {
            $trainer->receiveBadge();
        } else {
            $trainer->hitPokemons(10);
        }
    }

    $line = readline();
}

uksort($trainers, function ($key1, $key2) use ($trainers) {
    $trainer1 = $trainers[$key1];
    $trainer2 = $trainers[$key2];

    return $trainer2->getBadges() <=> $trainer1->getBadges();
});

echo implode(PHP_EOL, $trainers);
