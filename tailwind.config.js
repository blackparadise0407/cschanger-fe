module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 1s cubic-bezier(.28,.93,.73,.07) infinite ',
            },
        },
    },
    plugins: [],
}
