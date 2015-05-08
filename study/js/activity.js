// JavaScript Document
$(document).ready(function() {				   
    rateItm($("#menvitem").val());
});

function rateItm(navcur){
	
			var span= document.getElementById("menv"+navcur+"");
			
		    span.className= 'c1'+navcur;
		
}

var links_len;
window.onload=function(){
	var links = document.getElementById("activity_nav").getElementsByTagName('li');
	links_len=links.length;
	
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("a"+i);
		
		var menudiv = document.getElementById("activity"+i);
		
		if(i==1){
			menu.className="a";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}
function activity(num){
	var num=num;
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("a"+i);
		var menudiv = document.getElementById("activity"+i);
		if(i==num){
			menu.className="a";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}
