const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const entries = require("./entries.js");

module.exports = merge(common, {
	entry: entries(),
	mode: "development",
	// inline-source-map not for production use!
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		historyApiFallback: { index: "/notFound404/index.html" },
		devMiddleware: {
			// writeToDisk: (filePath) => {
			// 	console.log(filePath);
			// 	return /\.php$/.test(filePath);
			// },
			// writeToDisk: true,
		},
	},
});
