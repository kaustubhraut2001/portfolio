/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            scrollSnapType: {
                x: 'x mandatory',
                y: 'y mandatory',
            },
            scrollSnapAlign: {
                start: 'start',
                center: 'center',
                end: 'end',
            },
            fontFamily: {
                signature: ['Great Vibes'],
            },
        },
    },
    plugins: [],
}