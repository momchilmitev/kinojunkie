<?php
    class Text
    {
        private array $chars;

        public function __construct(array  $chars = [])
        {
            $this->chars = $chars;
        }

        public function substring(int $start, int $length = -1): Text
        {
            $result = [];
            $start = max(0 , $start);
            $start = min(count($this->chars), $start);

            if ($length == -1 || $length >= count($this->chars)) {
                $length = count($this->chars) - $start;
            }

            for ($i = $start; $i < $start + $length; $i++) {
                $result[] = $this->chars[$i];
            }

            return new Text($result);
        }

        public function __toString(): string
        {
            $result = '';

            foreach ($this->chars as $char) {
                $result .= $char;
            }

            return  $result;
        }
    }

    $name = new Text(['M', 'o', 'm', 'c', 'h', 'i', 'l']);
    echo $name;
    echo PHP_EOL;
    echo $name->substring(2);
    echo PHP_EOL;