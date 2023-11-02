import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: {
                    // eslint-disable-next-line max-len
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:8]'
                        : '[hash:base64:8]',
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});
