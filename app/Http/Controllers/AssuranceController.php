<?php

namespace App\Http\Controllers;

use App\Models\Assurance;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AssuranceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Assurance::all());
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
            'nagence'=>'required',
            'nomagence'=>'required',
            'adresse'=>'required',
            'telephone'=>'required',
            'duree'=>'required',
            'immatriculation'=>'required',
            'Montant'=>'required'
        ]);
        Assurance::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Assurance $Assurance)
    {
        return response()->json([
            'Assurance'=>$Assurance
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Assurance $assurance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Assurance $Assurance)
    {
        $request->validate([
            'nagence'=>'required',
            'nomagence'=>'required',
            'adresse'=>'required',
            'telephone'=>'required',
            'duree'=>'required',
            'immatriculation'=>'required',
            'Montant'=>'required'
        ]);
        $Assurance->fill($request->post())->update();

        $Assurance->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Assurance $Assurance)
    {
        $Assurance->delete();
        return response()->json([
            $Assurance
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
