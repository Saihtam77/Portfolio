<?php

namespace Database\Factories;

use App\Models\Projets;
use faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Projets>
 */
class ProjetsFactory extends Factory
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

            "titre" => $this->faker->word,
            "intro" => $this->faker->paragraph,
            "presentation" => $this->faker->paragraph(2),

            ""
        ];
    }
}
