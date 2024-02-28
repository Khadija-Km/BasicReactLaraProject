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
            $table->foreignId('Nagence')->constraind('agences','Nagence');
            $table->string('duree');
            $table->foreignId('immatriculation')->constraind('vehicules','immatriculation');
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
