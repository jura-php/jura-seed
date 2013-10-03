;(function(exports){

	//Modal
	function Modal(template, uri, events) {
		var modal = this,

			events = _.extend({
				onOpen: function() {},
				onClose: function() {}
			}, events),

			exports = {
				close: close,
				disableClose: disableClose,
				enableClose: enableClose
			}

		function open() {
			$('.modal').remove();

			modal.$el = $(template(modal.data));
			$('body').append(modal.$el);
			modal.$el.css('top', $(document).scrollTop() + 'px')
			bindEvents();

			events.onOpen.call(exports, modal.$el);
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
			events.onClose.call(exports, modal.$el);
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

			return exports;

		}

		return initialize();
	}

	exports.Modal = Modal;

}(window))