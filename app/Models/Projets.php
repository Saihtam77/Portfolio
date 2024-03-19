<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projets extends Model
{
    use HasFactory;
    protected $table = 'projets';
    protected $fillable = ['titre', 'presentation', 'diplome', 'objectif', 'imgFrontOffice', 'imgBackOffice'];
    
    public function technologies()
    {
        return $this->belongsToMany(Technologies::class);
    }
}
