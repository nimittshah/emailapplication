mailApp.controller("mailController", function($scope, mailService){
	console.log("hi");
	console.log($scope.mails);
	$scope.loadMail = function(event, id){
		$.each($(event.currentTarget).parent().children(), function(){
			$(this).removeClass("selected");
		});
		
		$(event.currentTarget).addClass("selected");
		$("#loadMail").show();
		var openmail = (mailService.loadMail(id));
		
		if($scope.folderId==1){
			$("#frommail").html(openmail.sender + "&nbsp;&lt;"+openmail.senderMail+"&gt;");
			$("#tomail").html(openmail.to);
		}else{
			$("#tomail").html(openmail.sender + "&nbsp;&lt;"+openmail.senderMail+"&gt;");
			$("#frommail").html(openmail.to);
		}
		$("#subjectmail").html(openmail.subject);
		$("#datemail").html(new Date(openmail.date*1000));
		$("#bodymail").html(openmail.body);
		
		openmail.read = true;
	}
});