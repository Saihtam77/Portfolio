<?php

namespace Database\Seeders;

use App\Models\Projets;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Projets::factory()->count(10)->create();
    }
}
