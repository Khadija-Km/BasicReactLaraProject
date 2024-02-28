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
        Schema::create('assurances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Nagence');
            $table->foreign('Nagence')->references('Nagence')->on('agences');
            $table->string('duree');
            $table->string('immatriculation');
            $table->foreign('immatriculation')->references('immatriculation')->on('vehicules');
            $table->string('Montant');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assurances');
    }
};
