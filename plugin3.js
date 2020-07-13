class Plugin3 {
  /**
   * Plugin3 Constructor
   *
   * @param {} serverless
   * @param {} options
   */
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      "before:package:initialize": () =>
        console.log("before:initialize() => plugin 3333333333333333333333333333333")
    };

  }
}

module.exports = Plugin3;