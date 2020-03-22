var xtend = require('xtend');

module.exports = function(userOpts) {
    var opts = xtend({}, {
        defaultEnv: 'development',
        suffix: '.config.json'
    }, userOpts);

    if (!opts.root) {
        throw new Error("Root dir not specified. Pass in config folder path, eg. {root: __dirname + '/config'}");
    }

    var env = process.env.NODE_ENV || opts.defaultEnv,
        trail = opts.root.substr(-1) === '/' ? '' : '/',
        defaultConfig = require(opts.root + trail + 'default' + opts.suffix);

    return xtend({}, defaultConfig, require(opts.root + trail + env + opts.suffix));
};
