/**
	Author: Ronald Ekambi 
	Purpose of file: provides routes for application. 
	Define which file should be loaded depeding on URL 
**/
app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'mainCtrl'
	})
	.when('/listRecipes',{
		templateUrl: 'templates/recipeslist.html', 
		controller: 'listOfRecipesCtrl'

	}).when('/recipesDetails/:recipeid', {
		templateUrl: 'templates/recipesdetails.html',
		controller: 'recipesDetailsCtrl'
	})
	.when('/credit',{
		templateUrl: 'templates/credit.html',
		controller: 'creditCtrl'
	})
	.when('/createrecipe', {
		templateUrl: 'templates/createrecipe.html',
		controller: 'createCrtl'
	})
	.when('/createtag', {
		templateUrl: 'templates/createtag.html',
		controller: 'createTagCtrl'
	})
	.when('/createingredient', {
		templateUrl: 'templates/createingredient.html',
		controller: 'createIngredientCrtl'
	})
	//if the route is not recognised then it redirects you to home page
	.otherwise({
		redirecTo: '/'
	});
});