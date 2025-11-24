const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "arancibia",
    projectName: "casino-client",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["react", "react-dom", "jquery"],
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        // "process.env": JSON.stringify(process.env),
      }),
      new Dotenv({
        path: `.env.${webpackConfigEnv.NODE_ENV}`,
      })
    ],
  });
};
