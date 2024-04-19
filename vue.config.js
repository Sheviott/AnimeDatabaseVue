
const path = require("path");

module.exports = ({
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prependData: `@import "@/styles/_global.scss";`
        }
      },
      scss: {
        additionalData: `@import "@/styles/_global.scss";`
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "@/styles/_global.scss")]
    },
  },
 
});
