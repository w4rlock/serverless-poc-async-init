const plugin2 = require('./plugin2');
const plugin3 = require('./plugin3');
const plugin4 = require('./plugin4');
const plugin5 = require('./plugin5');

class Plugin1 {
  /**
   * Plugin1 Constructor
   *
   * @param {} serverless
   * @param {} options
   */
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      'before:package:initialize': () =>
        new Promise(res =>
          setTimeout(() => {
            console.log(
              'before:initialize() => plugin 1111111111111111111111111111111',
            );
            res();
          }, 2000),
        ),
    };

    this.asyncInit = () => {
      this.serverless.pluginManager.addPlugin(plugin3);
      this.serverless.pluginManager.addPlugin(plugin5);
      const plugins = this.serverless.pluginManager.plugins;
      plugins[plugins.length-1].asyncInit();


      this.serverless.pluginManager.addPlugin(plugin2);
      this.serverless.pluginManager.addPlugin(plugin4);
    };
  }
}

module.exports = Plugin1;