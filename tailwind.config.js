/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
    ],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#f37642',
                'meetup-pink': '#f65858',
            },
            fontFamily: {
                sans: ['"Source Sans 3"', 'sans-serif'],
            },
        },

    },
    plugins: [],
}
