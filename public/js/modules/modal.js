;(function(exports){

	//Modal
	function Modal(template, uri, events) {
		var modal = this,
			events = _.extend({
				open: function() {},
				close: function() {}
			}, events)

		function open() {
			$('.modal').remove();

			modal.$el = $(template(modal.data));
			$('body').append(modal.$el);
			modal.$el.css('top', $(document).scrollTop() + 'px')
			bindEvents();
			events.open(modal.$el);
		}

		function bindEvents() {
			modal.$el
				.on('click.modal', '.modal-close', close)
				.on('click.modal', '.modal-overlay', close);
		}

		function unbindEvents() {
			modal.$el
				.off('click.modal')
		}

		function close() {
			modal.$el.remove();
			events.close(modal.$el);
			return false;
		}

		function disableClose() {
			modal.$el.find('.modal-close').hide();
			unbindEvents();
		}

		function enableClose() {
			modal.$el.find('.modal-close').show();
			bindEvents();
		}

		function initialize() {
			if(_.isObject(uri)) {
				modal.data = uri;
				open()
			} else {
				$.getJSON(uri)
					.success(function(data){
						modal.data = data;
						open()
					})
			}


			return {
				close: close,
				disableClose: disableClose,
				enableClose: enableClose
			}
		}

		return initialize();
	}

	exports.Modal = Modal;

}(window))