class Plugin51 {
  /**
   * Plugin51 Constructor
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
              'before:initialize() => plugin 555.111111',
            );
            res()
          }, 2500);
        }),
    };
  }
}

module.exports = Plugin51;