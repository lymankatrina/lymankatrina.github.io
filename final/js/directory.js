const requestURL = 'https://github.com/lymankatrina/lymankatrina.github.io/blob/master/final/businessess.json';

fetch(requestURL, {
    mode: 'no-cors',
}
.then(function (response) {
    return response.json();
}
.then(function (jsonObject) {
    const businesses = jsonObject['business'];
    const directory = document.querySelector('.directoryCards');
    businesses.forEach (business => {
        let mySection = document.createElement('section');
        let myH3 = document.createElement('h3');
        let myP1 = document.createElement('p');
        let myP2 = document.createElement ('p')
        let myWebsite = document.createElement ('a');
        let l = document.createTextNode("Visit Website");
        myH3.innerHTML = `${business.businessName}`;
        myP1.innerHTML = `${business.businessAddress}`;
        myP2.innerHTML = `${business.businessPhone}`;
        myWebsite.setAttribute('href', business.businessWebsite);
        website.appendChild(l);        
        mySection.append(myH3);
        mySection.append(myP1);
        mySection.append(myP2);
        mySection.append(myAddress);
        mySection.append(myWebsite);
        directory.append(mySection);
    })
})))
