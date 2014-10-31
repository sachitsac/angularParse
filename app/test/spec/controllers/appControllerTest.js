define(['angular', 'app/scripts/angularParse'], function(angular, angularParse) {
  describe('appController', function() {
    
    // Initialise the test
    beforeEach(module('angularParse'));

    var appController, scope;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      appController = $controller('appController', {
        $scope: scope
      });
    }));

    // Write the test here
    it("should set the value of $scope.greeting when calling sayHellow", function() {
      expect(scope.greeting).toEqual('');
      scope.sayHellow();
      expect(scope.greeting).toEqual('Hellow');
    });
  });
});