angular.module('starter.controllers', [])

.controller('FechasCtrl', function($scope) {
    
    $scope.calculator = {
        init_date: new Date(),
        end_date: new Date(),
        numeric_input: null,
        option_selected: 'weeks'
    };
    
    $scope.calculator.weeknumber = weeknumber($scope.calculator.end_date); 
    
    $scope.calcularFin = function(){
        $scope.calculator.end_date = new Date($scope.calculator.init_date.getTime());;
        
        var days = 0;
        var months = 0;
        switch ($scope.calculator.option_selected) {
            case "natural_days":
                days = $scope.calculator.numeric_input;
                $scope.calculator.end_date.setDate($scope.calculator.end_date.getDate()+days);
                break;
            case "working_days":
                days = 7 / 5 * $scope.calculator.numeric_input;
                $scope.calculator.end_date.setDate($scope.calculator.end_date.getDate()+days);
                break;
            case 'weeks':
                days = 7 * $scope.calculator.numeric_input;
                $scope.calculator.end_date.setDate($scope.calculator.end_date.getDate()+days);
                break;
            case 'months':
                months = $scope.calculator.numeric_input;
                $scope.calculator.end_date.setMonth($scope.calculator.end_date.getMonth()+months);
                break;
        }
        $scope.calculator.weeknumber = weeknumber($scope.calculator.end_date); 
    };
    
    $scope.calcularInicio = function(){
        $scope.calculator.init_date = new Date($scope.calculator.end_date.getTime());;
        
        var days = 0;
        var months = 0;
        switch ($scope.calculator.option_selected) {
            case "natural_days":
                days = $scope.calculator.numeric_input;
                $scope.calculator.init_date.setDate($scope.calculator.init_date.getDate()-days);
                break;
            case "working_days":
                days = 7 / 5 * $scope.calculator.numeric_input;
                $scope.calculator.init_date.setDate($scope.calculator.init_date.getDate()-days);
                break;
            case 'weeks':
                days = 7 * $scope.calculator.numeric_input;
                $scope.calculator.init_date.setDate($scope.calculator.init_date.getDate()-days);
                break;
            case 'months':
                months = $scope.calculator.numeric_input;
                $scope.calculator.init_date.setMonth($scope.calculator.init_date.getMonth()-months);
                break;
        }
        
    };

    
})
;

function weeknumber(date, prevyear) {
    var datetemp = date;
    var year = datetemp.getFullYear() - (prevyear ? 1 : 0);
    var newyearday = new Date(year,0,1);
    var days = Math.floor((datetemp.getTime() - newyearday.getTime()) / (24 * 60 * 60 * 1000));
    var offset = [6,7,8,9,10,4,5][newyearday.getDay()];
    var number = Math.floor((days + offset) / 7);
    if (number === 0) number = weeknumber(date, true); 
    return number;
};