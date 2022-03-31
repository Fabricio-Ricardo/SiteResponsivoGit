var x = 0;
var y = 0;
var w = 0;
var t =0;

function foto1(){

var bnt = document.getElementsByClassName("bnt");
var bnt2 = document.getElementsByClassName("bnt2");
var bnt3 = document.getElementsByClassName("bnt3");
x = document.getElementsByClassName("contFoto");
x[0].style.backgroundImage = "url('imagens-icones/foto001.jpg')";
bnt[0].style.backgroundColor= "lightgray";
bnt2[0].style.backgroundColor= "white";
bnt3[0].style.backgroundColor= "white";


}
	    	
function foto2(){
var bnt2 = document.getElementsByClassName("bnt2");
var bnt = document.getElementsByClassName("bnt");
var bnt3 = document.getElementsByClassName("bnt3");
y = document.getElementsByClassName("contFoto");
y[0].style.backgroundImage = "url('imagens-icones/foto002.png')";
bnt2[0].style.backgroundColor= "lightgray";
bnt[0].style.backgroundColor= "white";
bnt3[0].style.backgroundColor= "white";

}

function foto3(){
var bnt3 = document.getElementsByClassName("bnt3");
var bnt2 = document.getElementsByClassName("bnt2");
var bnt = document.getElementsByClassName("bnt");

w = document.getElementsByClassName("contFoto");
w[0].style.backgroundImage = "url('imagens-icones/foto003.png')";
bnt3[0].style.backgroundColor= "lightgray";
bnt2[0].style.backgroundColor= "white";
bnt[0].style.backgroundColor= "white";

} 
var g =0;
var m =0;
function menuDesce(){
	if(g == 0){
 t = document.getElementsByClassName("menuExpande");
 m = document.getElementsByClassName("menuMobile");
 m[0].style.transform = "rotate(90deg)";
 t[0].style.marginTop="0px";
 g = 1;
 }
 else{
 t = document.getElementsByClassName("menuExpande");
 m = document.getElementsByClassName("menuMobile");
 m[0].style.transform = "rotate(0deg)";
 t[0].style.marginTop="-200px";
 g = 0;
 }
}
