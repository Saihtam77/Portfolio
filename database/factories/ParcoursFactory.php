<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Parcours>
 */
class ParcoursFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titre' => $this->faker->word,
            'niveau_etude' => $this->faker->word,
            'entreprise' => $this->faker->word,
            'competences' => $this->faker->word,
            'desc' => $this->faker->text(),
            'texte' => $this->faker->text(),
            'date_debut' => $this->faker->date(),
            'date_fin' => $this->faker->date(),
            'image' => "https://placehold.co/600x400",
            'thumbnail' => "https://placehold.co/600x400",
        ];

    }
}
