mailApp.service("mailService", function($rootScope, $http, $sce){
	console.log("hi");
	$rootScope.method = 'GET';
	$rootScope.url = 'app/config/mails.json';
	
	$rootScope.response = null;
	
	$http({method: $rootScope.method, url: $rootScope.url})
		.then(function(response) {
			$rootScope.status = response.status;
			$rootScope.mails = response.data;
			console.log(response.data);
		}, function(response) {
			$rootScope.data = response.data || "Request failed";
			$rootScope.status = response.status;
		});
	
	$rootScope.convertToHtml = function(html_code){
		//console.log(html_code);
		return $sce.trustAsHtml(html_code);
    }
	$rootScope.convertToPlain = function(text){
		return text ? String(text).replace(/<[^>]+>/gm, '') : '';
	}
	
	this.loadMail = function(id){
		return $rootScope.mails.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];
	}
	
});