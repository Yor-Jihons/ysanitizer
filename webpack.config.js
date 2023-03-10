module.exports = {
    // If you put "production", this product will be simplified.
    // If you put "development", this product will include some infos.
    mode: 'development',

    devtool: 'source-map',

    // The entry point.
    entry: './src/main.ts',

    // Where I create this product.
    output: {
        //  The directory path.
        path: `${__dirname}/ysanitizer`,
        // The file-name.
        filename: "ysanitizer.js"
    },

    module: {
        rules: [{
            // When it is a ts-file,
            test: /\.ts$/,
            // Compile it as TypeScript.
            use: 'ts-loader',
        }, ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
};