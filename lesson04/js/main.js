function toggleMenu() {
document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {year:'numeric'};
        
let updatedate = new Date();
document.getElementById('updatedate').textContent = updatedate;