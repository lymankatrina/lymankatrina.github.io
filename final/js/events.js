const requestURL = 'https://github.com/lymankatrina/lymankatrina.github.io/blob/master/final/events.json';

fetch(requestURL, {
    mode: 'no-cors',
}
.then(function (response) {
    return response.json();
}
.then(function (jsonObject) {
    const events = jsonObject['events'];
    const eventlist = document.querySelector('.eventlist');
    events.forEach (event => {
        let mySection = document.createElement('section');
        let myH3 = document.createElement('h3');
        let myP1 = document.createElement('p');
        let myP2 = document.createElement ('p')
        let myAddress = document.createElement ('a');
        let t = document.createTextNode("Event Location");
        let myWebsite = document.createElement ('a');
        let l = document.createTextNode("More Information");
        myH3.innerHTML = `${event.eventName}`;
        myP1.innerHTML = `${event.eventDate}`;
        myP2.innerHTML = `${event.eventDesc}`;
        myAddress.setAttribute('href', event.eventLocation);
        address.appendChild(t);
        website.setAttribute('href', event.eventWebsite);
        website.appendChild(l);        
        mySection.append(myH3);
        mySection.append(myP1);
        mySection.append(myP2);
        mySection.append(myAddress);
        mySection.append(myWebsite);
        eventlist.append(mySection);
    })
})))
