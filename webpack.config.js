const PugPlugin = require("pug-plugin");
const path = require("path");

const sourcePath = path.join(__dirname, "src");

const alterPugFolderStructure = (pathData) => {
	const sourceFile = pathData.filename;
	const relativeFile = path.relative(sourcePath, sourceFile);
	const { dir, name } = path.parse(relativeFile);

	// if page exists nested (only one level) eg /shop/product1
	const nestedDir = path.relative("pages", dir);

	if (name === "index") {
		return `${name}.html`;
	}
	return nestedDir ? `${nestedDir}/${name}/index.html` : `${name}/index.html`;
};

module.exports = {
	mode: "development",
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/",
		clean: true,
	},
	entry: {
		// index: "./src/index.js",
		index: "./src/pages/index.pug",
		about: "./src/pages/about.pug",
		"about/things": "./src/pages/about/things.pug",
	},
	// inline-source-map not for production use!
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new PugPlugin({
			filename: alterPugFolderStructure,
			pretty: true,
			html: {
				filename: "/[name]/index.html",
			},
			js: {
				filename: "/js/[name].[contenthash].js",
			},
			css: {
				filename: "/css/[name].[contenthash].css",
			},
		}),
	],
	optimization: {
		runtimeChunk: "single",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// translates css into commonjs
					"css-loader",
					// compiles s[ac]ss to css
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/img/[name].[hash][ext]",
				},
			},
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
			},
		],
	},
};
