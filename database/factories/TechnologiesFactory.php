<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Technologies>
 */
class TechnologiesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "image" => "https://placehold.co/600x400",
            "name" => $this->faker->word,
            "niveau" => $this->faker->numberBetween(0, 100),
            "desc" => $this->faker->text(),
        ];
    }
}
