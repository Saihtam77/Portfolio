<?php

namespace App\Http\Controllers;

use App\Models\Competences;
use App\Models\Parcours;
use App\Models\Projets;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $parcours=Parcours::OrderBy('created_at', 'desc')->take(5)->get();
        $projets=Projets::OrderBy('created_at', 'desc')->get();
        $competences=Competences::OrderBy('created_at', 'desc')->get();
        return Inertia::render("Home",[
            "parcours"=>$parcours,
            "projets"=>$projets,
            "competences"=>$competences
        ]);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
