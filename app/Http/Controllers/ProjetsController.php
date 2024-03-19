<?php

namespace App\Http\Controllers;

use App\Models\Projets;
use App\Models\Technologies;
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
        $technologies=Technologies::all();
        
        return Inertia::render("Dashboard/ProjetCreate", ['technologies' => $technologies]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $request->validate([
                'titre' => 'required',
                'intro' => 'required',
                'presentation' => 'required',
                'objectif' => 'required',
    
                'technologies' => 'required|array|min:1',
    
                // 'thumbnail'=>'required',
                // 'images'=>'required',
                // 'imgFrontOffice'=>'required',
                // 'imgBackOffice'=>'required',
            ]);
        }
        catch(\Exception $e){
            return dd($e);
        }
        

        $projet = new Projets();

        $projet->titre = $request->titre;
        $projet->intro = $request->intro;
        $projet->presentation = $request->presentation;
        $projet->objectif = $request->objectif;
        
        // $projet->thumbnail=$request->thumbnail;
        // $projet->images=$request->images;
        // $projet->imgFrontOffice=$request->imgFrontOffice;
        // $projet->imgBackOffice=$request->imgBackOffice;

        $projet->save();

        $projet->technologies()->attach($request->technologies);

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
            'intro' => 'required',
            'presentation' => 'required',
            'objectif' => 'required',

            'technologies' => 'required|array|min:1',

            // 'thumbnail'=>'required',
            // 'images'=>'required',
            // 'imgFrontOffice'=>'required',
            // 'imgBackOffice'=>'required',
        ]);

        $projet = Projets::find($id);

        $projet->titre = $request->titre;
        $projet->intro = $request->intro;
        $projet->presentation = $request->presentation;
        $projet->objectif = $request->objectif;

        // $projet->thumbnail=$request->thumbnail;
        // $projet->images=$request->images;
        // $projet->imgFrontOffice=$request->imgFrontOffice;
        // $projet->imgBackOffice=$request->imgBackOffice;

        $projet->save();

        $projet->technologies()->sync($request->technologies);


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
