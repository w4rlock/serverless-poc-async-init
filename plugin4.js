class Plugin4 {
  /**
   * Plugin4 Constructor
   *
   * @param {} serverless
   * @param {} options
   */
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      "before:package:initialize": () =>
        console.log("before:initialize() => plugin 4444444444444444444444444444444")
    };
  }
}

module.exports = Plugin4;