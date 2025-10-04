export default {
  plugins: {
    autoprefixer: {},        // Adds vendor prefixes
    'postcss-nested': {},    // Enables nested CSS like Sass
    'postcss-preset-env': {  // Lets you use future CSS features
      stage: 1,               // Which CSS features to polyfill
    },
  },
};