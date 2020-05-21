@extends('layouts.app')

@section('pageDescription', 'Boilerplate Home Description')
@section('pageTitle', 'Boilerplate Home Title')

@section('content')
    <!-- Home React Data -->
    <script>
      let data = JSON.parse(['{!! $data !!}']);
    </script>
    <script src="{{ mix('js/app-home.js') }}"></script>
@endsection