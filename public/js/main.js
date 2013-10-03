;(function(){

	"use strict";

	var config = _.extend(window.config || {}, {
		UA: '123456',
		debug: (window.location.hostname === "localhost"),
		baseUrl: $('base').attr('href')
	})

	var templates = (function(){
		var tpls = {};
		$('script[type="text/template"]').each(function(){
			tpls[$(this).attr('id').replace('template-', '')] = _.template($(this).html());
		})
		return tpls;
	}())

	var tracker = new gaTrackers({UA: config.UA, debug: config.debug})

	var router = mbone.router({
		// pushState: true,
		// root: '/joy-seed/',
		// autostart: false,
		routes: {
			'' : 'home',
			'modal' : 'modal',
		},

		home: function(){
			$('#main').html(templates['logo']({data: {name: 'Joy'}}))

			mbone.delegate('#main', {
				'click .logo': 'clickLogo'
			}, {
				clickLogo: function(){
					console.log('Você clicou no logo')
				}
			})

		},

		modal: function(){
			this.openedModal = new Modal(templates['modal'], 'modal_data', {
				open: function($el) {
					console.log('modal opened');

					mbone.delegate($el, {
						'click h1': function(){
							console.log('Você clicou no titulo da modal')
						}
					})
				},

				close: function($el) {
					console.log('modal closed')
				}
			})
		}

	})

}())