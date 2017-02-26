/**
 * 
 */

function sayHello() {
	var data = document.getElementById("data");
	data.innerHTML = "blub blub blub";
}

var ajaxRequest;

function ajaxInit(){
	   try{  
		   // Opera 8.0+, Firefox, Safari
		   ajaxRequest = new XMLHttpRequest();
		   }catch (e){
		   
		      // Internet Explorer Browsers
		      try{
		         ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		      }catch (e) {
		      
		         try{
		            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		         }catch (e){
		      
		            // Something went wrong
		            alert("Your browser broke!");
		            return false;
		         }
		      }
		   }
	
}

function getTaskList(){
	ajaxInit();	
	ajaxRequest.onreadystatechange = processRequest;
	ajaxRequest.open("GET","http://localhost:8080/com.rebsy.jersey.todoapp/rest/todos",true);
	ajaxRequest.send(null);
}

function processRequest(){
	if(ajaxRequest.readyState == 4){
		if(ajaxRequest.status == 200){
			var message = ajaxRequest.responseText;
			var data = document.getElementById("data");
			data.innerHTML = message;
		}
	}
}