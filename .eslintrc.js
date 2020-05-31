module.exports = {
  env: {
	"browser": true,
	"es6": true,
	"node": true,
	"mocha": true,
	"jasmine": true,
	"jquery": true
  },
  "extends": [
	"eslint:recommended",
	"plugin:react/recommended"
  ],
  "parserOptions": {
	"ecmaFeatures": {
	  "experimentalObjectRestSpread": true,
	  "jsx": true
	},
	"sourceType": "module"
  },
  "plugins": [
	"react"
  ],
  "parser": "babel-eslint",
  "rules": {
	"indent": ["error", "tab", { "SwitchCase": 1, "ignoredNodes": ["TemplateLiteral"]}],
	"no-tabs": "off",
	"linebreak-style": [
		"warn",
		"unix"
	],
	"quotes": [
		"warn",
		"single"
	]
  }
}
