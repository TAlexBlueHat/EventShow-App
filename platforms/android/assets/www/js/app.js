// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('EventShow', ['ionic', 'EventShow.controllers'])

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

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'eventsCtrl'
        }
      }
    })
    .state('app.card', {
      url: '/card',
      views: {
        'menuContent': {
          templateUrl: 'templates/card.html'
        }
      }
    })

  .state('app.tickets', {
    url: '/tickets',
    views: {
      'menuContent': {
        templateUrl: 'templates/tickets.html'
      }
    }
  })
  .state('app.purchaseHistory', {
      url: '/purchaseHistory',
      views: {
          'menuContent': {
              templateUrl: 'templates/purchaseHistory.html'
          }
      }
  })
  .state('app.about', {
      url: '/about',
      views: {
          'menuContent': {
              templateUrl: 'templates/about.html'
          }
      }
  })
  .state('app.params', {
      url: '/params',
      views: {
          'menuContent': {
              templateUrl: 'templates/params.html'
          }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
