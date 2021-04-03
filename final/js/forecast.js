const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.6242&lon=-109.4782&appid=5d23be79eb6222459cb8f0bfb602b10b&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
//call the id in the html file to write to it//
    const temperature = document.querySelector('#temp');
    temperature.textContent = jsObject.current.temp;

    const humidity = document.querySelector('#humid');
    humidity.textContent = jsObject.current.humidity;

    const condition = document.querySelector('#cond');
    condition.textContent = jsObject.current.weather[0].description;

    const warning = document.querySelector('#alert');
    warning.textContent = jsObject.alerts.event;

    const alert = document.querySelector('#alertdesc');
    alert.textContent = jsObject.alerts.description;

});


