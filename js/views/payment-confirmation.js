var app = app || {};

app.views = app.views || {};

app.views.PaymentConfirmation = (function() {

	'use strict';

	return app.abstracts.BaseView.extend({

		className: 'payment-confirmation',

		template: '#template-payment-confirmation',

		events: {
			'quicktouch .done': 'done',
		},

		done: function(evt) {

			if (evt && evt.preventDefault) {
				evt.preventDefault();
			}

			// Navigate back to the homescreen
			app.router.navigate('main', { trigger: true });
		},

		onBackButton: function() {

			this.done();
		}

	});

})();
