//store the JSON resource
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//use fetch to obtain a promise for
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const towns = jsonObject['towns'];
    //select output location    
    const cards = document.querySelector('.cards');
    towns.forEach(town => {
        let card = document.createElement('section');
        let townName = document.createElement('h1');
        let townMotto = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let townImg = document.createElement('img');
        //use template literals        
        townName.innerHTML = `${town.name}`;
        townMotto.innerHTML = `${town.motto}`;
        townImg.innerHTML = `${town.photo}`;
        yearFounded.innerHTML = `Year Founded: ${town.yearFounded}`;
        population.innerHTML = `Current Population: ${town.currentPopulation}`
        averageRainfall.innerHTML = `averageRainfall: ${town.averageRainfall}`
        card.append(townName);
        card.append(townMotto);
        card.append(townImg);
        card.append(yearFounded);
        card.append(population);
        card.append(averageRainfall);
        cards.append(card);
    });
});
