var CleanCSS = require('clean-css');

/**
 *  Handler can accept as file content - JavaScript String or UglifJS AST Tree
 */

module.exports = function (defaultConfig) {
	return function(file, ioConfig) {

		var config = ioConfig && ioConfig['atma-io-middleware-clean-css'] || defaultConfig || { minify: true};

		if (config.minify === false) {
			return;
		}

		var result = new CleanCSS(config['clean-css']).minify(file.content);
		if (result.errors && result.errors.length > 0) {
			console.error(file.uri.toLocalFile(), result.errors);
		}
		file.content = result.styles;
	};
}
