<?php

namespace Database\Seeders;
use App\Models\Parcours;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParcoursTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Parcours::factory()->count(10)->create();
    }
}
