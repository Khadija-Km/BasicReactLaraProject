<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historique extends Model
{
    use HasFactory;
    protected $fillable = ['date','chauffeur_id' ,'ville_id','mission','service',"immatriculation",'destination',];
}
