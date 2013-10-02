;(function(){

	"use strict";

	var config = _.extend(config || {}, {
		UA: '123456',
		debug: (window.location.hostname === "localhost")
	})

	var tracker = new gaTrackers({UA: config.UA, debug: config.debug})

	var router = mbone.router({
		routes: {
			'' : 'home',
		},

		home: function(){
			console.log('home')
		}

	})

}())