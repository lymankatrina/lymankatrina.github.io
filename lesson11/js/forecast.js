let cityID = 5604473;
let appid = '5d23be79eb6222459cb8f0bfb602b10b';
const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${appid}`;

fetch(apiURL2)
    .then((response) => response.json())
    .then(function(jsObject2) {
        const lists = jsObject2['list'];
        //console.log(jsObject2);
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let item = 0;
        //reduce the list array to the five forecasts....40
        const str = jsObject2.list[item].dt_txt;
        //filter
        //console.log(n);
        lists.forEach(forecast => {
            if (forecast.dt_txt.includes('18:00:00')) {
                let d = new Date(forecast.dt_txt);
                //console.log(d);
                //get forecast day
                document.getElementById(`forecastday${day+1}`).textContent = dayofWeek[d.getDay()];
                //get forecast icon
                document.getElementById(`icon${day+1}`).setAttribute('src', `http://openweathermap.org/img/wn/${forecast.weather[item].icon}@2x.png`);
                document.getElementById(`icon${day+1}`).setAttribute('alt', forecast.weather[item].description);
                //get forecast temp
                document.getElementById(`forecasttemp${day+1}`).textContent = forecast.main.temp+' F\u00B0';
                //get forecast desc
                document.getElementById(`forecastdesc${day+1}`).textContent = forecast.weather[item].description;
                day++;
        }});
    });