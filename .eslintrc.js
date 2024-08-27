module.exports = {
	extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['react', '@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	rules: {
		// @next/next/no-img-element: "error",
		// no-console: "warn",
		// @next/next/no-html-link-for-pages: "error",
		// jsx-a11y/alt-text: "error"
	},
};
