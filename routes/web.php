<?php

use App\Http\Controllers\CompetenceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ParcoursController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjetsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix("/")->group(function () {


    Route::get("", [HomeController::class, "index"])->name("home");
    Route::get("portfolio", [PortfolioController::class, "indexProjets"])->name("portfolio");

    Route::get("portfolio/projets/{id}", [PortfolioController::class, "showProjet"]);
    Route::get("portfolio/parcours/{id}", [PortfolioController::class, "showParcour"]);

    Route::get("contact", function () {
        return Inertia::render("Contact");
    })->name("contact");
    
    Route::get("403", function () {
        return Inertia::render("403");
    })->name("error403");

    Route::get("404", function () {
        return Inertia::render("404");
    })->name("error404");
});

Route::middleware(['auth', 'verified'])->prefix("/dashboard")->group(function () {
    Route::get("", function () {
        return Inertia::render("Dashboard");
    })->name("dashboard");

    /* ressources */
    Route::resource("projets", ProjetsController::class);
    Route::resource("parcours", ParcoursController::class);
    Route::resource("competences", CompetenceController::class);
});



require __DIR__ . '/auth.php';
