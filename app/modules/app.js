var mailApp = angular.module("mailApp", ["ngRoute", 'ui.bootstrap']);

mailApp.config(function($routeProvider){
	$routeProvider
		.when("/", {
			controller: "inboxController",
			templateUrl: "app/view/inbox.html"
		})
		.when("/inbox", {
			controller: "inboxController",
			templateUrl: "app/view/inbox.html"
		})
		.when("/sent",{
			controller : "sentController",
			templateUrl : "app/view/inbox.html"
		})
		.when("/error", {
			controller : "errorController",
			templateUrl: "app/view/error.html"
		})
		.otherwise({ redirectTo: '/error' });
});

mailApp.run(['$rootScope','$location', '$routeParams', '$templateCache', function($rootScope, $location, $routeParams, $templateCache) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
		console.log('Current route name: ' + $location.path());
		// Get all URL parameter
		//console.log($routeParams);
		$(".folders>li").each(function(index, value) {
			$(value).find("a").removeClass("selected");
		});
		
		switch($location.path()){
			case "/":
				$(".folders>li:nth-child(1)>a").addClass("selected");
				break;
			case "/inbox":
				$(".folders>li:nth-child(1)>a").addClass("selected");
				break;
			case "/sent":
				$(".folders>li:nth-child(2)>a").addClass("selected");
				break;
			default:
				break;
		}
	});
}]);