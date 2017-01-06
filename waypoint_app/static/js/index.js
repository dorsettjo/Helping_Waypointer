navigator.geolocation.getCurrentPosition(function(location) {
    $("#latitude").html(location.coords.latitude)
    $("#longitude").html(location.coords.longitude)
});


lat = document.getElementById("latitude");
lon = document.getElementById("longitude");
