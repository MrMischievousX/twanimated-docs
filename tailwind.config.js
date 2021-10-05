const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['./pages/**/*.ts{,x}', './components/**/*.ts{,x}'],
  plugins: [require('daisyui')],
  safelist: [{ pattern: /animate-.*/ }],
});
