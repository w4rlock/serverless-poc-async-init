class Plugin2 {
  /**
   * Plugin2 Constructor
   *
   * @param {} serverless
   * @param {} options
   */
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      "before:package:initialize": () =>
        console.log("before:initialize() => plugin 2222222222222222222222222222222")
    };
  }
}

module.exports = Plugin2;