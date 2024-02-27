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
        Schema::create('maintenances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('typemaintenance');
            $table->string('montant');
            $table->date('date');
            $table->string('ngarage');
            $table->string('nomgarage');
            $table->string('Adresse');
            $table->string('Telephone');
            $table->string('immatriculation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maintenances');
    }
};
