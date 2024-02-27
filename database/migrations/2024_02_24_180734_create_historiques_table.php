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
        Schema::create('historiques', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date');
            $table->string('mission');
            $table->string('service');
            $table->string('automobile');
            $table->string('immatriculation');
            $table->string('chauffeur');
            $table->string('destination');
            $table->string('ville');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historiques');
    }
};
