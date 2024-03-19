<?php

namespace App\Http\Controllers;

use App\Models\Technologies;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TechnologiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $technologies = Technologies::OrderBy('created_at', 'desc')->get();
        return Inertia::render("Dashboard/TechnologiesDashboard", [
            "technologies" => $technologies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Dashboard/TechnologieCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required",
            "niveau" => "required",
            "desc" => "required"
        ]);

        $technologie = new Technologies();
        $technologie->name = $request->input("name");
        $technologie->niveau = $request->input("niveau");
        $technologie->desc = $request->input("desc");
        $technologie->save();

        return to_route("technologies.index")->with("success", "Technologie ajoutée avec succès");
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
        $technologie = Technologies::find($id);
        return Inertia::render("Dashboard/TechnologieEdit", [
            "technologie" => $technologie
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $technologie = Technologies::find($id);

        $request->validate([
            "name" => "required",
            "niveau" => "required",
            "desc" => "required"
        ]);

        $technologie->name = $request->input("name");
        $technologie->niveau = $request->input("niveau");
        $technologie->desc = $request->input("desc");
        $technologie->save();

        return to_route("technologies.index")->with("success", "Technologie modifiée avec succès");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
