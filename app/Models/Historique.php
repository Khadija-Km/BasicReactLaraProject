<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historique extends Model
{
    use HasFactory;
    protected $fillable = ['date','chauffeur_id' ,'ville_id','mission','service',"immatriculation",'destination',];

    public  function chauffeur()
    {
        return $this->belongsTo(Chauffeur::class);
    }
    public  function vehicule()
    {
        return $this->belongsTo(Vehicule::class ,'immatriculation', 'immatriculation');
    }
    public  function ville()
    {
        return $this->belongsTo(Ville::class);
    }

}
