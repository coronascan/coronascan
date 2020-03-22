var assert = require('assert'),
    cf = require('../');

describe('loading config', function() {
    it('should result in an object', function(done) {
        var config = cf({ root: __dirname + '/env' });
        assert(config instanceof Object, "Config didn't result in an object");
        done();
    });
});
