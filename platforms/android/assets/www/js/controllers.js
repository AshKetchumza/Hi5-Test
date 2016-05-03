// High 5 Test App Main controller.js

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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
