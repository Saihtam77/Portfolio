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
        Schema::create('parcours', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            
            $table->string('titre');
            $table->string('niveau_etude');
            $table->string('entreprise');
            $table->string('competences');
            $table->text('desc');
            $table->text('texte');

            $table->date('date_debut');
            $table->date('date_fin');

            $table->string('thumbnail')->nullable();
            $table->string('image')-> nullable();
            
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parcours');
    }
};
