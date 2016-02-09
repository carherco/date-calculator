angular.module('starter.controllers', [])

.controller('FechasCtrl', function($scope) {
    
    $scope.calculator = {
        init_date: new Date(),
        end_date: new Date(),
        numeric_input: null,
        option_selected: 'weeks'
    };
    
    $scope.calcular = function(){
        $scope.calculator.end_date = new Date($scope.calculator.init_date.getTime());;
        
        var days = 0;
        switch ($scope.calculator.option_selected) {
            case "natural_days":
                days = $scope.calculator.numeric_input;
                break;
            case "working_days":
                days = 7 / 5 * $scope.calculator.numeric_input;
                break;
            case 'weeks':
                days = 7 * $scope.calculator.numeric_input;
                break;
            case 'months':
                days = 30 * $scope.calculator.numeric_input;
                break;
        }
        
        $scope.calculator.end_date.setDate($scope.calculator.end_date.getDate()+days);
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
