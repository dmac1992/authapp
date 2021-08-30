<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\TopSecretController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthenticationController::class, 'register']);
    Route::post('/login', [AuthenticationController::class, 'login']);
    Route::get('/verify', [AuthenticationController::class, 'verify']);
});


Route::middleware('mustBeAuthenticated')->group(function () {
    Route::get('/topsecreta', [TopSecretController::class, 'aaa']);
    Route::get('/topsecretb', [TopSecretController::class, 'bbb']);
    Route::get('/topsecretc', [TopSecretController::class, 'ccc']);
});