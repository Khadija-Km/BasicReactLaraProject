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
        Schema::table('vehicules', function (Blueprint $table) {

            $table->string('category');
            $table->string('mark');
            $table->string('carburant');
            $table->string('nplace');
            $table->string('ngrise');
            $table->string('empane');
            $table->dropColumn("ndvignette");
            $table->dropColumn("nvignette");
            $table->dropColumn("service");
            $table->dropColumn("benificiaire");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicules', function (Blueprint $table) {
            //
        });
    }
};
