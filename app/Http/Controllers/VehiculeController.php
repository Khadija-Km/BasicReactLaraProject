<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VehiculeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Vehicule::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'immatriculation'=>'required',
            'categorie'=>'required',
            'marque'=>'required',
            'carburant'=>'required',
            'nplace'=>'required',
            'ngrise'=>'required',
            'enpanne'=>'required'
        ]);
        Vehicule::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicule $Vehicule)
    {
        return response()->json([
            'Vehicule'=>$Vehicule
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicule $vehicule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vehicule $Vehicule)
    {
        $request->validate([
            'immatriculation'=>'required',
            'categorie'=>'required',
            'marque'=>'required',
            'carburant'=>'required',
            'nplace'=>'required',
            'ngrise'=>'required',
            'enpanne'=>'required'
        ]);
        $Vehicule->fill($request->post())->update();

        $Vehicule->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicule $Vehicule)
    {
        $Vehicule->delete();
        return response()->json([
            $Vehicule
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
