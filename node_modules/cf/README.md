## cf

Environment sensitive configuration file loader for node.js, using xtend

### Example usage:

Installation:

`npm install cf`

Create a directory where you intend to store your configuration files. Eg. 'config'. In that
directory, make two files:

- `config/default.config.json`
- `config/development.config.json`

In your code:

```javascript
var myConfig = require('cf')({
    root: __dirname + '/config'
});
```

Now your `myConfig` variable will be an object containing all the values of the default
config file and the ones your development config file overrides.

Now you can also make a production config in `config/production.config.json` and when
you start your app using `NODE_ENV=production node myapp.js` that file will
be used instead.

### Options

- `root`: root directory of your config files. **Required**
- `suffix`: what file suffix you want to use.. default is .config.json
- `defaultEnv`: what environment name to use if none is defined.

### note: not very well tested at this point.. WIP

### License:

MIT
