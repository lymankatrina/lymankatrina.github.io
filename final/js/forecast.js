const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.6242&lon=-109.4782&appid=5d23be79eb6222459cb8f0bfb602b10b&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
//call the id in the html file to write to it//
    const temperature = document.querySelector('#temp');
    temperature.textContent = jsObject.current.temp;

    const humidity = document.querySelector('#humid');
    humidity.textContent = jsObject.current.humidity;

    const condition = document.querySelector('#cond');
    condition.textContent = jsObject.current.weather[0].description;

    //const warning = document.querySelector('#alert');
    //warning.textContent = jsObject.alerts.event;

    //const alert = document.querySelector('#alertdesc');
    //alert.textContent = jsObject.alerts.description;

    const forecastt1 = document.querySelector('#forecasttemp1');
    forecastt1.textContent = jsObject.daily[1].temp.day+ '\u00B0 F';

    const forecastd1 = document.querySelector('#forecastdesc1');
    forecastd1.textContent = jsObject.daily[1].weather[0].description;

    const forecasti1 = document.querySelector('#forecasticon1');
    forecasti1.setAttribute('src', `http://openweathermap.org/img/wn/${jsObject.daily[1].weather[0].icon}@2x.png`);
    forecasti1.setAttribute('alt', jsObject.daily[1].weather[0].description);         

    const forecastt2 = document.querySelector('#forecasttemp2');
    forecastt2.textContent = jsObject.daily[2].temp.day + '\u00B0 F';

    const forecastd2 = document.querySelector('#forecastdesc2');
    forecastd2.textContent = jsObject.daily[2].weather[0].description;

    const forecasti2 = document.querySelector('#forecasticon2');
    forecasti2.setAttribute('src', `http://openweathermap.org/img/wn/${jsObject.daily[2].weather[0].icon}@2x.png`);
    forecasti2.setAttribute('alt', jsObject.daily[2].weather[0].description);         

    const forecastt3 = document.querySelector('#forecasttemp3');
    forecastt3.textContent = jsObject.daily[3].temp.day+ '\u00B0 F';

    const forecastd3 = document.querySelector('#forecastdesc3');
    forecastd3.textContent = jsObject.daily[3].weather[0].description;

    const forecasti3 = document.querySelector('#forecasticon3');
    forecasti3.setAttribute('src', `http://openweathermap.org/img/wn/${jsObject.daily[3].weather[0].icon}@2x.png`);
    forecasti3.setAttribute('alt', jsObject.daily[3].weather[0].description);         

});


