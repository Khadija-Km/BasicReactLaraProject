<?php

namespace App\Http\Controllers;

use App\Models\Ville;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VilleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Ville::all());
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
            'NomVille'=>'required',
            'Region'=>'required',
        ]);
        Ville::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Ville $Ville)
    {
        return response()->json([
            'Ville'=>$Ville
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ville $Ville)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ville $Ville)
    {
        $request->validate([
            'NomVille'=>'required',
            'Region'=>'required',
        ]);
        $Ville->fill($request->post())->update();

        $Ville->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ville $Ville)
    {
        $Ville->delete();
        return response()->json([
            $Ville
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
