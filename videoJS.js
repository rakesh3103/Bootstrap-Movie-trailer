/*function func(){
	
	alert("Page Loaded");
}

$(document).ready(func);
*/

$(document).ready(function(){
		
		$("#switch").click(change);
		
	});
	
/*	
$(document).ready(function(){
		
		$("#darkbg").click(darkbg);
		
	});
	*/
	
	function change(){
		
		var status = document.getElementById("switch").src;
		
		if(status==="file:///C:/Users/Rakesh%20M/Desktop/UI/BootStrap/light.png"){
			
			litebg();
		}else if(status==="file:///C:/Users/Rakesh%20M/Desktop/UI/BootStrap/dark.png"){
			
			darkbg();
		}
		
	}
	
function litebg(){
	
	//alert("Light background");
	
	document.getElementById("switch").src = "dark.png";
	document.getElementById("switch").title = "Turn Dark";
	
	$("#body").css("background", " #000 url(light_bg.png)   repeat");
	$("#body").css("color", "black");
	$("body").css("transition", "all 2s ease");
	
}

function darkbg(){
	
	//alert("Dark background");
	
		document.getElementById("switch").src = "light.png";
		document.getElementById("switch").title = "Turn Light";
	$("#body").css("background", " #000 url(dark_bg.jpg)   repeat");
	$("#body").css("color", "white");
	$("body").css("transition", "all 2s ease");
	
	
	
	
}
	
	
	
	