exports.config = {
    user: process.env.LT_USERNAME || 'YOUR LAMBDATEST USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR LAMBDATEST ACCESS KEY',
    updateJob: false,
    exclude: [],
    maxInstances: 10,
    // capabilities: [{
    //     browserName: 'chrome',
    //     version: 'latest',
    //     platform: 'WIN10',
    //     build: 'WDIO-Cucumber-Build',
    //     name: 'Login-feature',
    //     tunnel: true
    //   }],
    capabilities: [{
      "lt:options": {
        "w3c": true,
        "platformName": "android",
        "deviceName": "Pixel 3",
        "platformVersion": "9",
        "isRealMobile": true,
        "tunnel":true
      }
    }],
      services: [
        [
          "lambdatest",
          {
            tunnel: true,
            lambdatestOpts: {
              tunnelName: "T1"
            }
          }
        ]
      ],
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    host: 'mobile-hub.lambdatest.com',
    port:80,
    specs: [
        './features/**/*.feature'
    ],
    reporters: ['spec'],
    framework: 'cucumber',
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
  }