const cy = Date.prototype.getFullYear();
document.getElementById('currentyear') = cy;

const lu = Date.parse(document.lastModified);
document.getElementById('updatedate') = lu;