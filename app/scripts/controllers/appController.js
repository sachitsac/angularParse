'use strict';
define(['angular', 'angularParse'], function(angular, angularParse) {
  angularParse.controller('appController', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
      $scope.greeting = '';
      $scope.sayHellow = function() {
        $scope.greeting = 'Hello';
      };
    }
  ]);
});