<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Resturant;

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

Route::get('/', function () {
    return view('home');
});
Route::get('/resturants',function(){
    return view('resturants',[
        'heading'=>'Spots Near Me',
        'listings'=>Resturant::all()
        ]);
});

Route::get('/resturants/{id}',function($id){
    return view('resturants',[
        'heading'=>'Search',
        'listings'=>Resturant::find($id)
        ]);
});