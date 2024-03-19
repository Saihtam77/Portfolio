<?php

namespace App\Http\Controllers;

use App\Models\Parcours;
use App\Models\Projets;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function indexProjets()
    {
        $projets = Projets::OrderBy('created_at', 'desc')->get();
        return Inertia::render("Projets", [ 
            "projets" => $projets
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
    public function showParcour(string $id)
    {
        $parcour = Parcours::find($id);
        return Inertia::render("ShowPages/Parcour", [
            "parcour" => $parcour
        ]);
    }

    public function showProjet(string $id)
    {
        $projet = Projets::find($id);
        $technologies = $projet->technologies;
        return Inertia::render("ShowPages/Projet", ['projet' => $projet, 'technologies' => $technologies]);
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
