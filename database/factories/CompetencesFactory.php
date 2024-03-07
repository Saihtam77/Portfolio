<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Competences>
 */
class CompetencesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "titre" => $this->faker->word,
            "niveau" => $this->faker->numberBetween(0, 100),
            "image" => "https://placehold.co/600x400",
            "desc" => $this->faker->text(),
        ];
    }
}
