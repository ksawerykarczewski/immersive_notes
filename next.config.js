const path = require('path');
const process = require('process');

const defaultSassOptions = {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
        @import "styles/core/functions.scss";
        @import "styles/core/mixins.scss";
        @import "styles/core/variables.scss";
    `
};

const defaultEslintConfig = {
    ignoreDuringBuilds: true
};

const defaultWebpackConfig = (config) => {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
};

function getConfig(options) {
    return Object.assign(options, {
        basePath: process.env.BASE_PATH,
        trailingSlash: true
    });
}

module.exports = (phase) => {
    return getConfig({
        sassOptions: defaultSassOptions,
        webpack: defaultWebpackConfig,
        eslint: defaultEslintConfig,
        images: {
            domains: ['images.ctfassets.net']
        },
        poweredByHeader: false
    });
};
