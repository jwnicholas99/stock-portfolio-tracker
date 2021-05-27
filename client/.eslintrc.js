module.exports = {
    root: true,
    extends: 'airbnb',
    rules: {
        'react/react-in-jsx-scope': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
    },
    env: {
        browser: true,
    },
};
