<?php

namespace Database\Seeders;

use App\Models\Competences;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompetencesTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Competences::factory()->count(10)->create();
    }
}
