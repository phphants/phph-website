/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
    ],
    safelist: [
        'prose',
        {
            pattern: /bg-organiser-+/
        },
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image': "url('/assets/images/pexels-mikael-blomkvist-6476783.jpg')",
                'organiser-richard': "url('/assets/images/richard_holloway.jpg')",
                'organiser-verity': "url('/assets/images/verity_maton.jpeg')",
                'organiser-lauren': "url('/assets/images/lauren_james.jpg')",
                'organiser-jez': "url('/assets/images/jez_emery.jpeg')",
            },
            colors: {
                'brand-grey': '#3d424a',
                'brand-green': '#15eda3',
                'meetup-pink': '#f65858',
            },
            fontFamily: {
                sans: ['"Source Sans 3"', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
