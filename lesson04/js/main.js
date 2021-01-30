function toggleMenu() {
document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {year:'numeric'};
        
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', options);

let updatedate = document.lastModified;
document.getElementById('updatedate').textContent = updatedate;