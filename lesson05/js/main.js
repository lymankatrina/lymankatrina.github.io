function toggleMenu() {
document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {year:'numeric'};

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let today = new Date()
let finalDate = days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
document.getElementById("updatedate").innerHTML = finalDate;