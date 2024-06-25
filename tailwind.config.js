/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image': "url('/images/pexels-mikael-blomkvist-6476783.jpg')",
            },
            colors: {
                'brand-grey': '#3d424a',
                'brand-green': '#15eda3',
                'meetup-pink': '#f65858',
            },
            fontFamily: {
                sans: ['"Source Sans 3"', 'sans-serif'],
            },
        },

    },
    plugins: [],
}
