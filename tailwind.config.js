module.exports = {
	mode: process.env.NODE_ENV ? 'jit' : undefined,
	purge: [
		'./index.html',
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': '\'Oswald\', sans-serif',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		function ({addBase, theme}) {
			if (process.env.NODE_ENV === 'production') {
				return;
			}

			const screens = theme('screens', {});
			const breakpoints = Object.keys(screens);

			addBase({
				'body::after': {
					content: `"xs"`,
					position: 'fixed',
					right: '.5rem',
					bottom: '.5rem',
					padding: '.5rem',
					background: '#eeeeee',
					border: '1px solid',
					borderColor: '#dddddd',
					color: '#e50478',
					fontSize: '1rem',
					fontWeight: '600',
					zIndex: '99999',
				},
				...breakpoints.reduce((acc, current) => {
					acc[`@media (min-width: ${screens[current]})`] = {
						'body::after': {
							content: `"${current}"`,
						},
					};
					return acc;
				}, {}),
			});
		},
	],
};
