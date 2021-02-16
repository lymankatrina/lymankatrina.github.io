function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    }
function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}
function myFunction() {
    var dayOfWeek = new Date().getDay();
    var banner = document.getElementById('pancakes');
    if (dayOfWeek == 5) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}