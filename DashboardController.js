/**
 * Created by harjeet on 7/4/16.
 */

angular.module('DashboardModule').controller('DashboardController',['$scope','$http','$window','toastr', function($scope, $http, $window, toastr){

  $scope.test = {
    demo: "Its workings"
  }

}]);

angular.module('DashboardModule').controller('DashboardController',['$scope','$http','$window','toastr', function($scope, $http, $window, toastr){

  $scope.test = {
    demo: "Its workings"
  }

}]);

*/

angular.module('DashboardModule').controller('OverviewController',['$scope','$http','$log', function($scope, $http, $log){



  $scope.me = {};
  //Initialise Error Handler
  $scope.notFound = false;

  //Do an API Call to finduser with session in pagecontroller userProfile action

  $http.get("http://localhost:1337/page/userProfile")

    .success(function(data){
      //On successful API CALL check whether empty data is returned or not
      if(data.notFound === true)
      {
        //If user not Found set error flag -- ng-show manages the rest
        $scope.notFound = true;
        return;
      }
      //if user found copy employee Data
      $scope.me = data.userData;
      //Log the data
      $log.info(data.userData);
    })
    .error(function(data){
      //Log error Data
      $log.info(data);
    });





}]);
