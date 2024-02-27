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
        Schema::create('vehicules', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('immatriculation');
            $table->string('categorie');
            $table->string('marque');
            $table->string('carburant');
            $table->integer('nplace');
            $table->string('ngrise');
            $table->string('enpanne');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicules');
    }
};
