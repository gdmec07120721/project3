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
	var links = document.getElementById("parent_nav").getElementsByTagName('li');
	links_len=links.length;
	
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("parent"+i);
		
		var menudiv = document.getElementById("p"+i);
		
		if(i==1){
			menu.className="p";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}
function parent(num){
	var num=num;
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById("parent"+i);
		var menudiv = document.getElementById("p"+i);
		if(i==num){
			menu.className="p";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}
