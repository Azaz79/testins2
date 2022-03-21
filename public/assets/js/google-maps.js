function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 26.9124, lng: 75.7873};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'India, Rajasthan' // Title Location
    });
}