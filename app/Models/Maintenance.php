<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Maintenance extends Model
{
    use HasFactory;
    protected $fillable = ['typemaintenance','montant','date','ngarage',"nomgarage",'Adresse','Telephone','automobile','immatriculation'];

    public  function vehicule()
    {
        return $this->belongsTo(Vehicule::class ,'immatriculation', 'immatriculation');
    }

    public  function garage()
    {
        return $this->belongsTo(Garage::class ,'NGarage','NGarage');
    }
}
