var newspaper = angular.module('newspaper', ["ui.router"]);

newspaper.config(function($stateProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'BeatsCtrl'
  });
  $stateProvider.state('home.reporters', {
    url: "/:beatId",
    templateUrl: "partials/reporters.html",
    controller: 'ReportersCtrl'
  });
});
