const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "arancibia",
    projectName: "casino-client",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["react", "react-dom"],
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: "./.env", // or './.env.local', etc.
        systemvars: true, // include process.env from the system too
      }),
    ],
  });
};
