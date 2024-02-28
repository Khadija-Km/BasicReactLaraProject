<?php

namespace App\Http\Controllers;

use App\Models\Garage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class GarageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Garage::all());
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
            'NGarage'=>'required',
            'Nomgarage'=>'required',
            'Adresse'=>'required',
            'telephone'=>'required',
        ]);
        Garage::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Garage $Garage)
    {
        return response()->json([
            'Garage'=>$Garage
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Garage $Garage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Garage $Garage)
    {
        $request->validate([
            'NGarage'=>'required',
            'Nomgarage'=>'required',
            'Adresse'=>'required',
            'telephone'=>'required',
        ]);
        $Garage->fill($request->post())->update();

        $Garage->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Garage $Garage)
    {
        $Garage->delete();
        return response()->json([
            $Garage
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
