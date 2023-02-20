import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
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

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoaders = buildCssLoaders(isDev);

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [['i18next-extract', {
                    locales: ['ru', 'en'],
                    keyAsDefaultValue: true,
                }]],
            },
        },
    };

    return [
        babelLoader,
        typescriptLoaders,
        cssLoaders,
        svgLoaders,
        fileLoaders,
    ];
}
