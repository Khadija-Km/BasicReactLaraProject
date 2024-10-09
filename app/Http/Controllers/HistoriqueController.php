<?php

namespace App\Http\Controllers;

use App\Models\Historique;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class HistoriqueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $historiques = Historique::with('chauffeur' , 'vehicule' , 'ville')->get();

        // Return the historiques data as JSON response
        return response()->json($historiques);
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
            'date'=>'required',
            'mission'=>'required',
            'service'=>'required',
            'immatriculation'=>'required',
            'chauffeur_id'=>'required',
            'destination'=>'required',
            'ville_id'=>'required'
        ]);
        Historique::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Historique $Historique)
    {
        return response()->json([
            'Historique'=>$Historique
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Historique $historique)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Historique $Historique)
    {
        $request->validate([
            'date'=>'required',
            'mission'=>'required',
            'service'=>'required',
            'immatriculation'=>'required',
            'chauffeur_id'=>'required',
            'destination'=>'required',
            'ville_id'=>'required'
        ]);
        $Historique->fill($request->post())->update();

        $Historique->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Historique $Historique)
    {
        $Historique->delete();
        return response()->json([
            $Historique
            //'message'=>'element supprimer avec succes'
        ]);
    }
}