<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Session\Store as Session;

class AuthController extends Controller
{
    /**
     * @var Request
     */
    protected $request;

    /**
     * @var Session
     */
    protected $session;

    /**
     * authentication controller constructor
     *
     * @param Request $request
     * @param Session $session
     */
    public function __constructor(
        Request $request,
        Session $session
    ) {
        $this->session         = $session;
        $this->request         = $request;
    }

    /**
     * Login
     *
     * @return JsonResponse
     */
    public function login() : JsonResponse
    {
        $requestData = $this->request->json()->all();
    }

    /**
     * Confirm email rego email
     *
     * @return JsonResponse
     */
    public function verify() : JsonResponse
    {
        $requestData = $this->request->json()->all();
    }

    /**
     * Register new user
     *
     * @return JsonResponse
     */
    public function register() : JsonResponse
    {
        $requestData = $this->request->json()->all();
    }
}
