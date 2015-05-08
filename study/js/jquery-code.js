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
	var links = document.getElementById("school").getElementsByTagName('li');
	links_len=links.length;
	
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("s"+i);
		
		var menudiv = document.getElementById("box"+i);
		
		if(i==1){
			menu.className="s";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}
function school(num){
	var num=num;
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("s"+i);
		var menudiv = document.getElementById("box"+i);
		if(i==num){
			menu.className="s";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}
