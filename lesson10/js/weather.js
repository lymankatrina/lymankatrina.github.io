const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=5d23be79eb6222459cb8f0bfb602b10b&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
//call the id in the html file to write to it//
    const temperature = document.querySelector('#current-temp');
    temperature.textContent = jsObject.main.temp;

    const currently = document.querySelector('#currently');
    currently.textContent = jsObject.weather[0].description;
    
    const humid = document.querySelector('#humidity');
    humid.textContent = jsObject.main.humidity;

    const windy = document.querySelector('#windspeed');
    windy.textContent = jsObject.wind.speed;

//get image//
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;// note the concatenation//
    const desc = jsObject.weather[0].description;  // note how we reference the weather array//
    document.getElementById('imgsrc').img = imagesrc;  // informational specification only//
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method//
    document.getElementById('icon').setAttribute('alt', desc);
//calculate wind chill//
    var t=jsObject.main.temp;
    var s=jsObject.wind.speed;
    var f=35.74+(0.6215*t)-(35.75*(Math.pow(s,0.16)))+((0.4275*t)*(Math.pow(s,0.16)));
    if(t<51 && s>3){
       document.getElementById("windchill").innerHTML=(Math.round(f*10)/10);
    }
    else{
        document.getElementById("windchill").innerHTML="N/A";
    }
});

 