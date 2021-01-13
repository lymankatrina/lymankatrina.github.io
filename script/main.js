const currentyear = todaysdate.getFullYear();
document.getElementById('currentyear').textContent = currentyear;

const updatedate = Date.parse(document.lastModified);
document.getElementById('updatedate').textContent = updatedate;