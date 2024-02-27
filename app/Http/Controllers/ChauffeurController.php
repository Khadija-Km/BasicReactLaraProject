<?php

namespace App\Http\Controllers;

use App\Models\Chauffeur;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ChauffeurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Chauffeur::all());
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
            'cin'=>'required',
            'nom'=>'required',
            'prenom'=>'required',
            'naissance'=>'required',
            'gpermis'=>'required',
            'telephone'=>'required'
        ]);
        Chauffeur::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chauffeur $Chauffeur)
    {
        return response()->json([
            'Chauffeur'=>$Chauffeur
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chauffeur $chauffeur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chauffeur $Chauffeur)
    {
        $request->validate([
            'cin'=>'required',
            'nom'=>'required',
            'prenom'=>'required',
            'naissance'=>'required',
            'gpermis'=>'required',
            'telephone'=>'required'
        ]);
        $Chauffeur->fill($request->post())->update();

        $Chauffeur->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chauffeur $Chauffeur)
    {
        $Chauffeur->delete();
        return response()->json([
            $Chauffeur
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
