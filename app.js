var app =angular.module('LunchCheck', []);
    app.controller('LunchCheckController', function($scope) {
        $scope.check=function(){
     
      if($scope.inputdata == undefined){
       $scope.message = "Check If Too Much"
      }
     else{
      let data=$scope.inputdata.split(',');
      if(data.length <=3){

        $scope.message = "Enjoy!"

      }else if(data.length >=4){
        $scope.message = "Too much!"
      }
   }

   }
       
    });