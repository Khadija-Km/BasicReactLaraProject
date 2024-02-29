<?php

namespace App\Http\Controllers;

use App\Models\Vignette;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VignetteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $vignettes = Vignette::with('vehicule')->get();
        return response()->json($vignettes);
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
            'nvignette'=>'required',
            'ndvignette'=>'required',
            'benificiaire'=>'required',
            'service'=>'required',
            'Immatriculation'=>'required',
        ]);
        Vignette::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Vignette $Vignette)
    {
        return response()->json([
            'Vignette'=>$Vignette
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vignette $vignette)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vignette $Vignette)
    {
        $request->validate([
            'date'=>'required',
            'nvignette'=>'required',
            'ndvignette'=>'required',
            'benificiaire'=>'required',
            'service'=>'required',
            'Immatriculation'=>'required',
        ]);
        $Vignette->fill($request->post())->update();

        $Vignette->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vignette $Vignette)
    {
        $Vignette->delete();
        return response()->json([
            $Vignette
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
