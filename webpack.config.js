const PugPlugin = require("pug-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");
const webpack = require("webpack");

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

	const phpFile = name.split(".php");

	if (phpFile.length > 1) {
		if (phpFile[0] === "index") {
			return `${phpFile[0]}.php`;
		} else {
			return nestedDir
				? `${nestedDir}/${phpFile[0]}/index.php`
				: `${phpFile[0]}/index.php`;
		}
	}

	return nestedDir ? `${nestedDir}/${name}/index.html` : `${name}/index.html`;
};

module.exports = {
	mode: "development",
	entry: {
		index: "./src/pages/index.pug",
		notFound404: "./src/pages/notFound404.pug",
		contact: "./src/pages/contact.php.pug",
		confirmation: "./src/pages/confirmation.pug",
		examples: "./src/pages/examples.pug",
		termsConditions: "./src/pages/terms-and-conditions.pug",
		privacyPolicy: "./src/pages/privacy-policy.pug",
	},
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/",
		clean: true,
	},
	resolve: {
		alias: {
			Images: path.join(__dirname, "./src/images/"),
			Gallery: path.join(__dirname, "./src/components/gallery"),
		},
		// extensions: [".tsx", ".ts", ".js"],
	},
	// inline-source-map not for production use!
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		historyApiFallback: { index: "/notFound404/index.html" },
	},
	plugins: [
		new PugPlugin({
			filename: alterPugFolderStructure,
			pretty: true,
			js: {
				filename: "/js/[name].[contenthash].js",
			},
			css: {
				filename: "/css/[name].[contenthash].css",
			},
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, "src/php"),
					to: path.join(__dirname, "dist/php"),
				},
				{
					from: path.join(__dirname, "src/favicon"),
					to: path.join(__dirname, "dist/favicon"),
				},
				{
					// from regex ignores files starting with _ as they're includes
					// not whole files
					from: "src/mjml/[^_]*(?:\\.mjml)",
					to: "mjml/[name].php",
					transform: {
						transformer(content, absoluteFrom) {
							const filename = absoluteFrom.split("mjml\\_");
							if (filename.length === 1) {
								return mjml2html(content.toString(), { filePath: "src/mjml/" })
									.html;
							}
						},
					},
				},
			],
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [autoprefixer()],
			},
		}),
	],
	optimization: {
		runtimeChunk: "single",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					// translates css into commonjs
					"css-loader",
					"postcss-loader",
					// compiles s[ac]ss to css
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpg|jpeg)$/i,
				type: "asset/resource",
				use: [
					{
						loader: "responsive-loader",
						options: {
							name: "assets/img/[name].[hash].[ext]",
						},
					},
				],
			},
			{
				test: /\.(svg|gif)$/i,
				type: "asset",
				generator: {
					filename: "assets/img/[name].[hash].[ext]",
				},
			},
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
			},
		],
	},
};
