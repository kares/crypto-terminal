var app = app || {};

app.paymentMethods = app.paymentMethods || {};

app.paymentMethods.litecoin = (function() {

	'use strict';

	return app.paymentMethods.bitcoin.extend({

		// The name of the cryptocurrency shown in the UI:
		label: 'Litecoin',

		// The exchange symbol:
		code: 'LTC',

		// Used internally to reference itself:
		ref: 'litecoin',

		// Used for chain.so API requests:
		chainSoCode: 'LTC',

		// Used to generate a payment request URI:
		uriScheme: 'litecoin',

		/*
			Litecoin mainnet network constants.

				- Public key hash:
					Used in the generation of addresses from public keys.
					(mainnet) https://github.com/litecoin-project/litecore-lib/blob/9c3b2712de14335d2a953a8772aee87e23be6cf6/lib/networks.js#L132

				- Script hash:
					Used in the generation of scripting addresses from public keys.
					(mainnet) https://github.com/litecoin-project/litecore-lib/blob/9c3b2712de14335d2a953a8772aee87e23be6cf6/lib/networks.js#L134

				- WIF:
					"Wallet Import Format"
					Used to encode private keys in a way to be more easily copied.
					(mainnet) https://github.com/litecoin-project/litecore-lib/blob/9c3b2712de14335d2a953a8772aee87e23be6cf6/lib/networks.js#L133

				- BIP32 public/private key constants:
					Used in the generation of child addresses from master public/private keys.
					(mainnet) https://github.com/litecoin-project/litecoin/blob/ba8ed3a93be7e7a97db6bc00dd7280fa2f1548bc/src/chainparams.cpp#L137-L138
		*/
		networks: [
			{
				// Pay to public key hash:
				p2pkh: '30',
				// Pay to script hash:
				p2sh: '32',
				bip32: {
					public: '019da462',
					private: '019d9cfe',
				},
			},
			/*
				Yes, two sets of network constants.

				See:
				https://www.reddit.com/r/litecoin/comments/48wd2e/why_arent_the_litecoin_bip32_serialization_values/
			*/
			{
				// Pay to public key hash:
				p2pkh: '30',
				// Pay to script hash:
				p2sh: '32',
				bip32: {
					public: '0488b21e',
					private: '00488ade4',
				},
			},
		],

	});
})();
