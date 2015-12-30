angular.module('starter.controllers', [])

.controller('FechasCtrl', function($scope) {
    $scope.init_date = new Date();
    $scope.end_date = new Date();
    $scope.days = 30;
    
    $scope.end_date.setDate($scope.init_date.getDate()+$scope.days);
    
    $scope.calcular = function(){
        $scope.end_date.setDate($scope.init_date.getDate()+$scope.days);
    };

    
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
