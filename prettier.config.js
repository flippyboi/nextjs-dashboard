const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
    plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
    bracketSpacing: true,
    jsxBracketSameLine: false,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    arrowParens: 'avoid',
    printWidth: 100,
    semi: true,
};
