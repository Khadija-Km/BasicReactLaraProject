<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assurance extends Model
{
    use HasFactory;
    protected $fillable = ['nagence','nomagence','adresse','telephone','duree','automobile','immatriculation','Montant'];


    public  function vehicule()
    {
        return $this->belongsTo(Vehicule::class ,'immatriculation', 'immatriculation');
    }
}
