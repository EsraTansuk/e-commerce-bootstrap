const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      quietDeps: true,
    },
  },
};

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Anasayfa",
      filename: "index.html", //output
      template: "./src/views/home.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Hakkimizda",
      filename: "about.html", //output
      template: "./src/views/about.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Giriş",
      filename: "login.html", //output
      template: "./src/views/login.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Kayıt",
      filename: "register.html", //output
      template: "./src/views/register.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Ürün",
      filename: "product.html", //output
      template: "./src/views/product.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Ödeme",
      filename: "checkout.html", //output
      template: "./src/views/checkout.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Ürün 1",
      filename: "product1.html", //output
      template: "./src/views/product1.html",  //input
    }),

   

    

    // [].concat(
    //   pages.map(
    //     (page) =>
    //       new HtmlWebpackPlugin({
    //         inject: "body",
    //         title: `${page} Page || Kara Keçi`,
    //         template: `./src/${page}.html`,
    //       })
    //   )
    // ),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
          sassLoader,
        ],
      },
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
      },
      // Images loader
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        type: "asset/resource"
      }
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
    compress: true,
    liveReload: true,
    hot: true,
    port: 9000,
  },
};
