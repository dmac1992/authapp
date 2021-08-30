<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopSecretController extends Controller
{

    public function aaa() {
        return response()->json([
            "secretInfo" => "aaa",
        ]);
    }
    public function bbb() {
        return response()->json([
            "secretInfo" => "bbb",
        ]);
    }
    public function ccc() {
        return response()->json([
            "secretInfo" => "ccc",
        ]);
    }

}
