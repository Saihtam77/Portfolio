<?php

namespace App\Http\Controllers;

use App\Models\Parcours;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ParcoursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $parcours = Parcours::OrderBy('id', 'desc')->get();
        return Inertia::render("Dashboard/ParcoursDashboard", ['parcours' => $parcours]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Dashboard/ParcourCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /* dd($request->all());   */

        $this->validate($request, [
            'titre' => 'required',
            'niveau_etude' => 'required',
            'entreprise' => 'required',
            'competences' => 'required',
            'desc' => 'required',
            'texte' => 'required',
            'date_debut' => 'required',
            'date_fin' => 'required',

            /* 'thumbnail' => 'image|mimes:jpeg,png,jpg,gif,svg',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg', */

        ]);

        /* DB import */
        $parcour = new Parcours();
        $parcour->titre = $request      ->input('titre');
        $parcour->niveau_etude = $request->input('niveau_etude');
        $parcour->entreprise = $request->input('entreprise');
        $parcour->competences = $request->input('competences');
        $parcour->desc = $request->input('desc');
        $parcour->texte = $request->input('texte');
        $parcour->date_debut = $request->input('date_debut');
        $parcour->date_fin = $request->input('date_fin');

        $parcour->save();

        return Inertia::render('parcours.index', [
            'success' => request()->session()->get('success')
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render("ShowPages/Parcour");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $parcour = Parcours::find($id);
        return Inertia::render("Dashboard/ParcourEdit", ['parcour' => $parcour]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $parcour = Parcours::find($id);

        $this->validate($request, [
            'titre' => 'required',
            'niveau_etude' => 'required',
            'entreprise' => 'required',
            'competences' => 'required',
            'desc' => 'required',
            'texte' => 'required',
            'date_debut' => 'required',
            'date_fin' => 'required',
        ]);

        $parcour->titre = $request->input('titre');
        $parcour->niveau_etude = $request->input('niveau_etude');
        $parcour->entreprise = $request->input('entreprise');
        $parcour->competences = $request->input('competences');
        $parcour->desc = $request->input('desc');
        $parcour->texte = $request->input('texte');
        $parcour->date_debut = $request->input('date_debut');
        $parcour->date_fin = $request->input('date_fin');

        $parcour->save();

        return to_route('parcours.index')->with('success', 'Parcour modifié avec succès');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {   
        $parcour = Parcours::find($id);
        $parcour->delete();
        $success = 'Parcour supprimé avec succès';
        return to_route('parcours.index')->with('success', $success);
        
    }
}