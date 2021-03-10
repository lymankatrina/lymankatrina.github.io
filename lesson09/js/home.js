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
    const hometown = towns.filter(x => x.name == "Fish Haven"|| x.name =="Preston" || x.name == "Soda Springs");
    hometown.forEach(hometown => {
        let card = document.createElement('section');
        let townName = document.createElement('h1');
        let townMotto = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let townImg = document.createElement('img');
        //use template literals        
        townName.innerHTML = `${hometown.name}`;
        townMotto.innerHTML = `${hometown.motto}`;
        //townImg.innerHTML = `${hometown.photo}`;

        townImg.innerHTML = ('src', `C:\Users\lyman\Documents\WDD230 Repository\lymankatrina.github.io\lesson09\images\ ${hometown.townImg}`);
        townImg.setAttribute('alt', `Picture of a scenic view of ${hometown.name}`);

        yearFounded.innerHTML = `Year Founded: ${hometown.yearFounded}`;
        population.innerHTML = `Current Population: ${hometown.currentPopulation}`
        averageRainfall.innerHTML = `averageRainfall: ${hometown.averageRainfall}`
        card.append(townName);
        card.append(townMotto);
        card.append(townImg);
        card.append(yearFounded);
        card.append(population);
        card.append(averageRainfall);
        cards.append(card);
    });
});
