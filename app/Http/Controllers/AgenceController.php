<?php

namespace App\Http\Controllers;

use App\Models\Agence;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AgenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Agence::all());
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
            'Nagence'=>'required',
            'Nomagence'=>'required',
            'Adresse'=>'required',
            'telephone'=>'required',
        ]);
        Agence::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Agence $Agence)
    {
        return response()->json([
            'Agence'=>$Agence
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Agence $Agence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Agence $Agence)
    {
        $request->validate([
            'Nagence'=>'required',
            'Nomagence'=>'required',
            'Adresse'=>'required',
            'telephone'=>'required',
        ]);
        $Agence->fill($request->post())->update();

        $Agence->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Agence $Agence)
    {
        $Agence->delete();
        return response()->json([
            $Agence
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
