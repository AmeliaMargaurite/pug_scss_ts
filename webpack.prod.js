const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const entries = require("./entries.js");

module.exports = merge(common, {
	entry: entries(null, true),
	mode: "production",
});
