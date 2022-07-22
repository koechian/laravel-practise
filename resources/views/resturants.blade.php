@extends('layout')

@section('spots-near-me')

@foreach ($listings as $item)
    
<div class='card'>
    <img src="{{$item->image}}"><br>
    <span>{{$item->name}}</span><br>
    <span class='subtext'>{{$item->tags}}</span>
 </div>


@endforeach
@endsection