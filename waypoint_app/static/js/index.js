navigator.geolocation.getCurrentPosition(whereareyou)

var currentlatitudei = 40.712784;
var currentlongitudei = -74.005941;

function whereareyou(positioncurrent) {
    var todisect = positioncurrent.coords
    currentlatitudei = todisect.latitude
    currentlongitudei = todisect.longitude
    console.log(currentlongitudei)
    console.log(currentlatitudei)
}
