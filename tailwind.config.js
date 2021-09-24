const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors,
		extend: {
			gridTemplateColumns: {
				16: 'repeat(16, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				16: 'repeat(16, minmax(0, 1fr))',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
