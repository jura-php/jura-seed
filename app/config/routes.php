<?php

Router::register("GET", "/", "index");
Router::register("GET", "/modal_data", function(){
	return Response::json(array(
		'title' => 'Titulo :)'
	));
});