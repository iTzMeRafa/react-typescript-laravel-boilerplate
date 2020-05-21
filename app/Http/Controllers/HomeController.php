<?php

namespace App\Http\Controllers;

class HomeController extends GlobalController
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index()
    {
        return view('pages/home')->with("data", $this->getViewData());
    }

    private function getViewData() {
        $viewData = [
            'viewData' =>  [
                'foo' => 'bar',
            ],
            'globalData' => $this->getGlobalPageData(),
        ];

        return json_encode($viewData);
    }
}
