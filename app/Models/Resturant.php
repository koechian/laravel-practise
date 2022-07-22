<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class Resturant extends Model
{
    use HasFactory,Notifiable,HasApiTokens;





    protected $fillable = [
        'name',
        'image',
        'cover_image',
        'tags',
        'food_served',
        'delivery_time',
        'delivery_fee'
    ];
}
