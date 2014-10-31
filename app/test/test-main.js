var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  paths: {
    'jquery': '/base/app/scripts/lib/jquery/dist/jquery.min',
    'bootstrap': '/base/app/scripts/lib/bootstrap/dist/js/bootstrap.min',
    'angular': '/base/app/scripts/lib/angular/angular.min',
    //'angular-sanitize': '/base/scripts/lib/angular-sanitize/angular-sanitize.min',
    //'angular-slider': '/base/scripts/lib/angular-slider/angular-slider.min',
    //'angular-animate': '/base/scripts/lib/angular-animate/angular-animate.min',
    'angular-route': '/base/app/scripts/lib/angular-route/angular-route.min',
    //'angular-resource': '/base/scripts/lib/angular-resource/angular-resource.min',
    'lessjs': '/base/app/scripts/lib/less.js/dist/less-1.7.5.min',
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'angular': {
      'exports': 'angular'
    },
  
    // 'angular-sanitize': {
    //   deps: ['angular']
    // },
    // 'angular-slider': {
    //   deps: ['angular']
    // },
    // 'angular-animate': {
    //   deps: ['angular']
    // },
    'angular-route': {
      deps: ['angular']
    },
    // 'angular-resource': {
    //   deps: ['angular']
    // }
  },

    // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start,

});

require(['jquery', 'lessjs', 'angular', 'app/scripts/routes'], function(jQuery, lessjs, angular) {
  jQuery(function() {
    angular.bootstrap(document, ['angularParse']);
  });
});
