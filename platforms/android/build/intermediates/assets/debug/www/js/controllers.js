angular.module('EventShow.controllers', ['ksSwiper'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('HomeCtrl', function($scope, $http){

    /** |-------------------------------------------------------
        | Carousel EventShow
        |-------------------------------------------------------
        |   Script générant un carousel pour afficher les
        |   évènements en tête d'affiche.
        |
        |   Author : I-Media IT Agency
        |   Dev : Alex TONDOH
        |
        |
    */

        $scope.carouselItem = {};
         


    /** |-------------------------------------------------------
        | Slider EventShow
        |-------------------------------------------------------
        |   Script générant un Slider pour afficher les
        |   évènements en fonction de la catégorie.
        |
        |   Author : I-Media IT Agency
        |   Dev : Alex TONDOH
        |
        |
    */

    $scope.swiper = {};

    $scope.onReadySwiper = function(swiper){
        swiper.on('slideChangeStart', function(){
            console.log('Slide Start');
        });

        swiper.on('onSlideChangeEnd', function(){
            console.log('Slide End');
        })
    }

})

.controller('eventsCtrl', function($scope, $http) {
    // var url = "https://shopping-54bb9.firebaseio.com/hg.json";

    $scope.events = {};

    /*$scope.showEvent = function(){
        $scope.events = getEvents();
    }*/

    /*function getEvents(){
        var events = [];
        $http.get(url).success(function(data){
            angular.forEach(data, function(value, key){
                var event = {id: value.id, title: value.title, organisationName: value.organisationName};
                events.push(event);
            });
        });
        return events;
    }*/
});
