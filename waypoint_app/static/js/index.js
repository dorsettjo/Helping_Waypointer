navigator.geolocation.getCurrentPosition(function(location) {
    $("#latitude").val(location.coords.latitude)
    $("#longitude").html(location.coords.longitude)
});


lat = document.getElementById("latitude");
lon = document.getElementById("longitude");
