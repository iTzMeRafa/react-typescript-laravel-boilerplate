<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class GlobalController extends Controller
{
    protected function getUserIpAddress() {
        return $_SERVER['REMOTE_ADDR'];
    }

    private function getUserInfo() {
        return [
            'isLoggedIn' => Auth::check(),
            'id' => Auth::id(),
            'email' => Auth::check() ? Auth::user()->email : null,
            'name' => Auth::check() ? Auth::user()->name : null,
            'csrf_token' => csrf_token(),
            'ip' => $this->getUserIpAddress(),
        ];
    }

    protected function getGlobalPageData()
    {
        return [
            'userInfo' => $this->getUserInfo(),
        ];
    }
}
