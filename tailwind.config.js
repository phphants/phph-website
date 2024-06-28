/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
    ],
    safelist: [
        {
            pattern: /bg-organiser-+/
        },
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image': "url('/images/pexels-mikael-blomkvist-6476783.jpg')",
                'organiser-richard': "url('/images/richard_holloway.jpg')",
                'organiser-verity': "url('/images/verity_maton.jpg')",
                'organiser-lauren': "url('/images/lauren_james.jpg')",
                'organiser-jez': "url('/images/jez_emery.jpg')",
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
    safeList: [
        'bg-organiser-richard',
        {
            pattern: /bg-organiser-(richard|verity|jez|lauren)/,
        }
    ],
    plugins: [],
}
