const plugin51 = require('./plugin5.1');

class Plugin5 {
  /**
   * Plugin5 Constructor
   *
   * @param {} serverless
   * @param {} options
   */
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      'before:package:initialize': () =>
        new Promise(res => {
          setTimeout(() => {
            console.log(
              'before:initialize() => plugin 5555555555555555555555555555555',
            );
            res()
          }, 2500);
        }),
    };

    this.asyncInit = () => this.serverless.pluginManager.addPlugin(plugin51);
  }
}

module.exports = Plugin5;