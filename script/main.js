let cy = new Date();
document.getElementById('currentyear') = cy.getFullYear();

let nLastModif = Date.parse(document.lastModified);
document.getElementById('updatedate') = nLastModif();