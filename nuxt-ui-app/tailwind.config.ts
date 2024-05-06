/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'blue-chill': {
                    '50': '#f2f9f9',
                    '100': '#ddeff0',
                    '200': '#bfe0e2',
                    '300': '#92cace',
                    '400': '#5faab1',
                    '500': '#438e96',
                    '600': '#3b757f',
                    '700': '#356169',
                    '800': '#325158',
                    '900': '#2d464c',
                    '950': '#1a2c32',
                },
            },
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            },
            fontFamily: {
                Poppins: ['Poppins'],
                NunitoSans: ['Nunito Sans']
            },
            screens: {
                xs: '460px',
            },

        },
    },
    plugins: [],
}