<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Http\Controllers\HistoriqueController;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\ChauffeurController;
use App\Http\Controllers\VignetteController;
use App\Http\Controllers\AssuranceController;
use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\AgenceController;
use App\Http\Controllers\GarageController;
use App\Http\Controllers\VilleController;

Route::resource('Historiques', HistoriqueController::class);
Route::resource('Vehicules', VehiculeController::class);
Route::resource('Chauffeurs', ChauffeurController::class);
Route::resource('Vignettes', VignetteController::class);
Route::resource('Assurances', AssuranceController::class);
Route::resource('Maintenances', MaintenanceController::class);
Route::resource('Agences', AgenceController::class);
Route::resource('Garages', GarageController::class);
Route::resource('Villes', VilleController::class);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

require __DIR__.'/auth.php';
