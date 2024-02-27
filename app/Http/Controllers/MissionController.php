<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Mission::all());
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
            'titreMission'=>'required',
            'benificiaire'=>'required',
            'service'=>'required',
            'destination'=>'required',
            'immatriculation'=>'required'
        ]);
        Mission::create($request->post());
        return response()->json([
            'message'=>'element ajoute avec succes'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mission $Mission)
    {
        return response()->json([
            'Mission'=>$Mission
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mission $mission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mission $Mission)
    {
        $request->validate([
            'date'=>'required',
            'titreMission'=>'required',
            'benificiaire'=>'required',
            'service'=>'required',
            'destination'=>'required',
            'immatriculation'=>'required'
        ]);
        $Mission->fill($request->post())->update();

        $Mission->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mission $Mission)
    {
        $Mission->delete();
        return response()->json([
            $Mission
            //'message'=>'element supprimer avec succes'
        ]);
    }
}
