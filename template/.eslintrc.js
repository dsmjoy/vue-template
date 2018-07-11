// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
			modules: true
		}
	},

	env: {
		browser: true,
	},
	extends: [

	],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	rules: {

	}
}
