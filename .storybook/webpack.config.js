module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                },
            ]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    );

    return config;
};
