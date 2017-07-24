(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheck);

    LunchCheck.$inject = ['$scope'];


    function LunchCheck($scope) {

  $scope.items = '';
        $scope.check = function () {
     
      var arr = [];
      var splite = $scope.items.split(',');
      for(var item =  splite.length; item >= 0; item--){
        if(splite[item] == "" | splite[item] ==  " " | splite[item] == '\n'| splite[item] == ' \n '){
          splite.splice(item,1);
        }
      }
            if ( splite == ',' |splite ==  "" | splite ==  " "  | splite == ' ' | splite == 0 ){               
        
       
         $scope.message = "Please enter data first";        
            }
            else {  
      
               $scope.message = splite.length <= 3 ? "enjoy!" : "too much!";                
            }

        };



    };

})();  
