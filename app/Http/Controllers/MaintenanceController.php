<?php

namespace App\Http\Controllers;

use App\Models\Maintenance;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MaintenanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Maintenance::all());
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
            'typemaintenance'=>'required',
            'montant'=>'required',
            'date'=>'required',
            'ngarage'=>'required',
            'nomgarage'=>'required',
            'Adresse'=>'required',
            'Telephone'=>'required',
            'immatriculation'=>'required'
        ]);
        Maintenance::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Maintenance $Maintenance)
    {
        return response()->json([
            'Maintenance'=>$Maintenance
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Maintenance $maintenance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Maintenance $Maintenance)
    {
        $request->validate([
            'typemaintenance'=>'required',
            'montant'=>'required',
            'date'=>'required',
            'ngarage'=>'required',
            'nomgarage'=>'required',
            'Adresse'=>'required',
            'Telephone'=>'required',
            'immatriculation'=>'required'
        ]);
        $Maintenance->fill($request->post())->update();

        $Maintenance->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Maintenance $Maintenance)
    {
        $Maintenance->delete();
        return response()->json([
            $Maintenance
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
