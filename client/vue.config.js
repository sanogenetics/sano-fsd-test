const Visualizer = require("webpack-visualizer-plugin"),
    axios = require("axios"),
    path = require("path");

module.exports = {
    configureWebpack: () => {
        const plugin_list = [];

        return {
            plugins: plugin_list,
        };
    },

    chainWebpack: (config) => {
        // remove the prefetch plugin - stops the site downloading content not for the current page
        // this should be added back in at some point and we can test the difference
        config.plugins.delete("prefetch");

        // app.html is the app and index.html is the pre-rendered root (/)
        // in cloudfront, the error page path points to /app.html
        if (process.env.NODE_ENV === "production") {
            config.plugin("html").tap((args) => {
                args[0].template = path.join(__dirname, "public", "index.html");
                args[0].filename = "app.html";
                return args;
            });
        }
    },

    devServer: {
        host: "0.0.0.0",
        port: 2000,
        disableHostCheck: true,
    },

    lintOnSave: false,
};
