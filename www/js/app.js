// High 5 Test App Main app.js

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.view5s', {
      url: '/view5s',
      views: {
        'menuContent': {
          templateUrl: 'templates/view5s.html',
          controller: 'View5sCtrl'
        }
      }
    })

    .state('app.create', {
      url: '/create',
      views: {
        'menuContent': {
          templateUrl: 'templates/create.html',
          controller: 'CreateCtrl'
        }
      }
    })

    .state('app.creating', {
      url: '/creating',
      views: {
        'menuContent': {
          templateUrl: 'templates/creating.html',
          controller: 'CreatingCtrl'
        }
      }
    })

    .state('app.success', {
      url: '/success',
      views: {
        'menuContent': {
          templateUrl: 'templates/success.html',
          controller: 'SuccessCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/view5s');
});
