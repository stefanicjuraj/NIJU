const config = {
  content: ["./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin');
  ],
};

module.exports = {
  config,
  devtool: "source-map",
}