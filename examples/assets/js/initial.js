// Attach a handler to an event for the elements.
$(document).bind('pageinit', init);

function init(){
	// global configuration for the application (optional)
	
	// type of transaction between page
	$.mobile.defaultPageTransition = 'slide';
	
	// action on the id 'login' and the function to be executed
	$('#login').click(access);
	
	// action on the id 'register' and the function to be executed 
	$("#register").click(register);
	
	// action on the id 'register' and the function to be executed 
	$("#clearRegister").click(clearRegister);
	
	$('#generateList').click(loadjson);
}
function access(){
	// basic form validation in form
	if($("#user").val() !== null && $("#password").val() !==null){
		// Translating from one page to another
		$.mobile.changePage("./app.html");
	}
}
// loading in the browser localStorage
function register(){
	localStorage.setItem("user", $('#userRegister').val());
	localStorage.setItem("password", $('#passwordRegister').val());
}
// clear fields in localstorage and form
function clearRegister(){
	// clear localstorage
	localStorage.removeItem("user");
	localStorage.removeItem("password");
	// clear form
	$('#userRegister').val("");
	$('#passwordRegister').val("");
}
// loading via Ajax from a JSON
function loadjson(){
	$.ajax({
		url:"./assets/js/users.json",
	// if this happens will load data from JSON
	}).done(function(data){
		var datajson = data;
		
		// loading data into the same list
		for (i = 0; i<datajson.users.length;i++){
				// adding after the last item in the list
				$('#lists').append("<li><a href=twitter.com/"+datajson.users[i]+">" + datajson.users[i] + "</a></li>");
				// test data load
				// console.log(datajson.users[i]);
		}
		// necessary to take the chosen style
		$('#lists').listview('refresh');
	});
}
