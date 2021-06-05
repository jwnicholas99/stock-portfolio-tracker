module.exports = {
    root: true,
    extends: 'airbnb',
    rules: {
        'react/react-in-jsx-scope': 'off',
        indent: ['error', 4, { ignoredNodes: ['JSXElement *'] }],
        'react/jsx-indent': ['error', 4],
        'object-curly-newline': 'off',
    },
    env: {
        browser: true,
    },
};
