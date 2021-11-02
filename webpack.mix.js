const mix = require('laravel-mix');

mix.postCss('src/css/site.css', 'dist/css', [
	require('tailwindcss'),
])

mix.browserSync({
	proxy: 'https://html-why-nachten.test',
	files: [
		'index.html',
		'dist/**/*.(css|js)',
	],
	notify: false,
	open: false
})

mix.disableSuccessNotifications()
mix.options({ manifest: false })
