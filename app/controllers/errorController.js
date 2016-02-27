mailApp.controller("errorController", function($scope, $sce){
	$scope.message = "Did you mean <a href='#/inbox'>INBOX</a>?";
	
	$scope.convertToHtml = function(html_code){
		//console.log(html_code);
		return $sce.trustAsHtml(html_code);
    }
});