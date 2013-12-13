<?php
/*
Ex:

Router::register("GET", "/", "index"); //view
Router::register("GET", "/", "index@method"); //controller -> IndexController::method()
Router::register("GET", "/", function () { }); //callback

Router::register("GET", "/detail/(:num)", function ($id) { return $id; }); //with params
*/

Router::register("GET", "/", "index");
Router::register("GET", "/modal_data", function(){
	return Response::json(array(
		'title' => 'Titulo :)'
	));
});