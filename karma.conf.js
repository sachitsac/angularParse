// Karma configuration
// Generated on Fri Oct 31 2014 12:19:41 GMT+1100 (AEDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/scripts/lib/angular/angular.min.js', included: false},
      {pattern: 'app/scripts/lib/angular-route/angular-route.min.js', included: false},
      {pattern: 'app/scripts/lib/less.js/dist/less-1.7.5.min.js', included: false},
      {pattern: 'app/scripts/lib/jquery/dist/jquery.min.js', included: false},
      {pattern: 'app/scripts/lib/bootstrap/dist/js/bootstrap.min.js', included: false},
      {pattern: 'app/scripts/*.js', included: false},
      {pattern: 'app/scripts/controllers/*.js', included: false},
      {pattern: 'app/scripts/directives/*.js', included: false},
      {pattern: 'app/scripts/services/*.js', included: false},
      {pattern: 'app/test/spec/**/*.js', included: false},
      'app/test/test-main.js'
    ],


    // list of files to exclude
    exclude: [
      'app/scripts/init.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
