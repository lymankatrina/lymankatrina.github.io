var t=document.getElementById("current-temp").innerHTML;
var s=document.getElementById("windspeed").innerHTML;
var f=35.74+(0.6215*t)-(35.75*(Math.pow(s,0.16)))+((0.4275*t)*(Math.pow(s,0.16)));
if(t<51 && s>3){
   document.getElementById("windchill").innerHTML=(Math.round(f*10)/10);
}
else{
    document.getElementById("windchill").innerHTML="N/A";
}