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
        Schema::create('vignettes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date');
            $table->string('nvignette');
            $table->string('ndvignette');
            $table->string('benificiaire');
            $table->string('service');
            $table->string('Immatriculation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vignettes');
    }
};
