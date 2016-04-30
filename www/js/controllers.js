angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  // $scope.loginData = {};


  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
  // Create the success modal that we will use later
  $ionicModal.fromTemplateUrl('templates/success.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the success modal to close it
  $scope.closeSuccess = function() {
    $scope.modal.hide();
  };

  // Open the success modal
  $scope.success = function() {
    $scope.modal.show();
  };


})

.controller('View5sCtrl', function($scope) {
})

.controller('CreateCtrl', function($scope, $stateParams, $ionicModal) {
  // Create the creating modal that we will use later
  $ionicModal.fromTemplateUrl('templates/creating.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the creating modal to close it
  $scope.closeCreate = function() {
    $scope.modal.hide();
  };

  // Open the creating modal
  $scope.create = function() {
    $scope.modal.show();
  };
})

.controller('CreatingCtrl', function($scope, $stateParams, $ionicModal) {
})

.controller('SuccessCtrl', function($scope, $stateParams) {
});
