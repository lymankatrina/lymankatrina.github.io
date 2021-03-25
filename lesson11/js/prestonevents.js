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
    const cards = document.querySelector('.events');
    const hometown = towns.filter(x => x.name == "Preston");
    hometown.forEach(hometown => {
        let card = document.createElement('section');        
        let article = document.createElement('article');
        //let place = document.createElement('h1');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        //use template literals        
        //place.innerHTML = `${hometown.name}`;
        event1.innerHTML = `${hometown.events[0]}`;
        event2.innerHTML = `${hometown.events[1]}`;
        event3.innerHTML = `${hometown.events[2]}`;
        //article.append(place);
        article.append(event1);
        article.append(event2);
        article.append(event3);
        card.append(article);
        cards.append(card);
    });
});
