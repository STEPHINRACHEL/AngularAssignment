app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/foodie");
 
  $stateProvider
    .state('piza', {
      url: "/piza/:key",
      templateUrl: "partials/piza.html",
      controller:function($scope,$stateParams){
        
$scope.headline=$scope.food[$stateParams.key].head;
$scope.desc=$scope.food[$stateParams.key].description;
$scope.images=$scope.food[$stateParams.key].image;

      }
    })
   
      .state('foodie', {
      url: "/foodie",
      templateUrl: "partials/foodie.html"
    })

    });




