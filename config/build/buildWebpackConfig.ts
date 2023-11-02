import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,

    };
}
