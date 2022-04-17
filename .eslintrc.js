module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'react-app',
		'react-app/jest',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
	rules: {
		'@typescript-eslint/no-var-requires': 'warn',
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				endOfLine: 'lf',
				semi: true,
				tabWidth: 2,
				useTabs: true,
				trailingComma: 'es5',
				arrowParens: 'avoid',
				printWidth: 80,
			},
		],
		'@typescript-eslint/ban-ts-comment': 'warn',
		'arrow-body-style': ['error', 'as-needed'],
		'import/no-extraneous-dependencies': 0,
		'no-underscore-dangle': [
			'error',
			{
				allow: [
					'_id',
					'__typename',
					'__schema',
					'__ref',
					'_rutarget',
					'_rtgParams',
				],
				allowAfterThis: true,
			},
		],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.ts', '.tsx'],
			},
		],
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/require-await': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/no-unsafe-call': 0,
		'@typescript-eslint/no-unsafe-member-access': 0,
		'@typescript-eslint/no-unsafe-assignment': 0,
		'@typescript-eslint/restrict-template-expressions': 0,
		'@typescript-eslint/no-unsafe-return': 0,
		'@typescript-eslint/unbound-method': 0,
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					[
						'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
					],
					['^react', '^@?\\w'],
					['^.+?[Tt]ype.+?'],
					[
						'^(@|@company|@ui|@components|@core|@views|utils|config|vendored-lib)(/.*|$)',
					],
					['^(@type)(/.*|$)'],
					['^.*use[A-Z].*$'],
					['^\\u0000'],
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					['^.*type'],
					['^.*styled.index$'],
				],
			},
		],
		'@typescript-eslint/triple-slash-reference': 'off',
		'no-return-assign': 'off',
		'no-void': 'off',
		'react/no-array-index-key': 'off',
		'react/jsx-props-no-spreading': 'off',
		indent: ['error', 'tab'],
		'import/export': 'off',
		'import/no-unresolved': 'off',
		'react/no-danger': 'off',
		'react/display-name': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ vars: 'all', argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
