<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Session\Store as Session;

class mustBeAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, Session $session)
    {
        if (!isset($session['authenticatedUser'])) {
            return response('not authenticated', 403);
        }
        return $next($request);
    }
}
