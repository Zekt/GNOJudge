var tokenManager = module.exports = {
	tokens: {},
	generate: function(user, exp) {
		var token = "";
		do {
			token = Math.random().toString(2)+Math.random().toString(2);
		} while (tokenManager.tokens[token] !== undefined);
		tokenManager.tokens[token] = { user: user, exp: exp };
	},
	remove: function(token) {
		tokenManager.tokens[token] = undefined;
	},
};
