module.exports = {
	plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
	bracketSpacing: true,
	endOfLine: 'crlf',
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	trailingComma: 'all',
	printWidth: 220,
	proseWrap: 'always',
	singleAttributePerLine: false,
	jsxSingleQuote: true,
	experimentalTernaries: false,
	bracketSameLine: true,
	arrowParens: 'always',
	// tailwindConfig: './tailwind.config.ts',
	tailwindFunctions: ['clsx', 'tw'],
	tailwindAttributes: ['className'],
	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'<THIRD_PARTY_MODULES>',
		'^@core/(.*)$',
		'^@server/(.*)$',
		'^@ui/(.*)$',
		'^types$',
		'^@/env(.*)$',
		'^@/types/(.*)$',
		'^@/config/(.*)$',
		'^@/lib/(.*)$',
		'^@/hooks/(.*)$',
		'^@/components/ui/(.*)$',
		'^@/components/(.*)$',
		'^@/styles/(.*)$',
		'^@/app/(.*)$',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
};
