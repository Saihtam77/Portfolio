<?php

namespace App\Http\Controllers;

use App\Models\Projets;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjetsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projets = Projets::OrderBy('id', 'desc')->get();
        return Inertia::render("Dashboard/ProjetsDashboard", ['projets' => $projets]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Dashboard/ProjetCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required',
            'desc' => 'required',
            'texte' => 'required',
            'competences' => 'required',
            // 'image'=>'required',
        ]);
        $projet = new Projets();
        $projet->titre = $request->titre;
        $projet->desc = $request->desc;
        $projet->texte = $request->texte;
        $projet->competences = $request->competences;
        // $projet->image=$request->image;
        $projet->save();
        return redirect()->route('projets.index')->with('success', 'Projet ajouté avec succès');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render("ShowPages/Pojet");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $projet = Projets::find($id);
        return Inertia::render("Dashboard/ProjetEdit", ['projet' => $projet]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'titre' => 'required',
            'desc' => 'required',
            'texte' => 'required',
            'competences' => 'required',
            // 'image'=>'required',
        ]);
        $projet = Projets::find($id);
        $projet->titre = $request->titre;
        $projet->desc = $request->desc;
        $projet->texte = $request->texte;
        $projet->competences = $request->competences;
        // $projet->image=$request->image;
        $projet->save();
        return redirect()->route('projets.index')->with('success', 'Projet modifié avec succès');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $projet = Projets::find($id);
        $projet->delete();
        return redirect()->route('projets.index')->with('success', 'Projet supprimé avec succès');
    }
}
