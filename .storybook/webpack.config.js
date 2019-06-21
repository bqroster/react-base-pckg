module.exports =({config}) => {

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                    '@babel/preset-env'
                    ]
                }
            },
            {
                loader: require.resolve('react-docgen-typescript-loader')
            }
        ]
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};