const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@core': path.resolve(__dirname, 'src/core/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@view': path.resolve(__dirname, 'src/views/'),
			'@images': path.resolve(__dirname, 'src/views/images/'),
			'@hooks': path.resolve(__dirname, 'src/core/hooks/'),
			'@api': path.resolve(__dirname, 'src/core/api/'),
			'@type': path.resolve(__dirname, 'src/types/'),
		},
	},
	jest: {
		configure: {
			moduleNameMapper: {
				'^@core(.*)$': '<rootDir>/src/core$1',
				'^@components(.*)$': '<rootDir>/src/components$1',
				'^@view(.*)$': '<rootDir>/src/views$1',
				'^@images(.*)$': '<rootDir>/src/views/images$1',
				'^@hooks(.*)$': '<rootDir>/src/core/hooks$1',
				'^@api(.*)$': '<rootDir>/src/core/api$1',
				'^@type(.*)$': '<rootDir>/src/types$1',
			},
		},
	},
};
