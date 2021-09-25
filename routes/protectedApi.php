<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/topsecreta', [TopSecretController::class, 'aaa']);
Route::get('/topsecretb', [TopSecretController::class, 'bbb']);
Route::get('/topsecretc', [TopSecretController::class, 'ccc']);
