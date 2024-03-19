<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('titre');
            $table->string('intro');
            $table->string('presentation');

            $table->json('objectifs');

            $table->string('thumbnail')->nullable();

            $table->json('images')->nullable();
            $table->json('galleryFrontOffice')->nullable();
            $table->json('galleryBackOffice')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projets');
    }
};
