//    var t=document.getElementById("temperature").innerHTML;
//    var ws=document.getElementById("windspeed").innerHTML;
//    if(t<51 && ws>3.0){
//        document.getElementById("windchill").innerHTML=Math.round((35.74+(0.6215*t)-(35.75*(math.pow(ws,0.16)))+((0.4275*t)*(math.pow(ws,0.16)))))*10)/10;
//    }
//     else{
//        document.getElementById("windchill").innerHTML="N/A";
//    }
let t=33;
let s=5;
let a=0.6125*t;
let ws=Math.pow(s,0.16);
let f=35.74+a-(35.75*ws)+(0.4275*t*ws);
if(t<51 && s>3){
    document.getElementById("windchill").innerHTML=(Math.round(f*10)/10);
}
else{
    document.getElementById("windchill").innerHTML="N/A";
}