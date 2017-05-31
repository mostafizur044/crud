var app = angular.module('myApp', ['ngRoute', 'firebase', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/edit.html'
	
	})
	.otherwise({
		redirectTo: '/'
	});
});


