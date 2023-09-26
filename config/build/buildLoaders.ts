import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/builBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoaders = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoaders = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // const typescriptLoaders = {
    //     test: /\.tsx?$/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 transpileOnly: false,
    //             },
    //         },
    //     ],
    //     exclude: /node_modules/,
    //
    // };

    const cssLoaders = buildCssLoaders(isDev);

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoaders,
        cssLoaders,
        svgLoaders,
        fileLoaders,
    ];
}
