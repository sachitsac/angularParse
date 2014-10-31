'use strict';
define(['angularParse', 'templates', 'controllers/appController'], function(angularParse) {
  return angularParse.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
      }
  ]);
});