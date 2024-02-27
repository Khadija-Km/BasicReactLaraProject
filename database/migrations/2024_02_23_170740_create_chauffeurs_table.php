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
        Schema::create('chauffeurs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('cin');
            $table->string('nom');
            $table->string('prenom');
            $table->string('naissance');
            $table->string('gpermis');
            $table->string('telephone');
            $table->timestamps();
        });
        Schema::table('chauffeurs', function (Blueprint $table) {
            $table->string('gpermis')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revenir en arrière : supprimer la modification de la colonne gpermis
        Schema::table('chauffeurs', function (Blueprint $table) {
            $table->integer('gpermis')->change();
        });

        // Supprimer la table
        Schema::dropIfExists('chauffeurs');
    }
};
