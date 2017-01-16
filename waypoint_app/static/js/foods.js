// function foodList(){
//     var $stuff = $("<ol>")
//         jQuery.ajax("/api/foods/").done(function(results){
//             console.log('boi')
//             var foodPlaces = results.results
//             for(var i = 0; i < foodPlaces.length; i++){
//                 console.log(foodPlaces[i]['website'])
//                 $stuff.html($stuff.html()+ foodPlaces[i]['providername'] + "<br>")
//                 $("#foodResults").append($stuff)
//             }
//         })
// }
//
// $("#foodButton").click(function(){location.href='foods'}).done(foodList())

navigator.geolocation.getCurrentPosition(whereareyou)

var currentlatitudef = 40.712784;
var currentlongitudef = -74.005941;

function whereareyou(positioncurrent) {
    var todisect = positioncurrent.coords
    currentlatitudef = todisect.latitude
    currentlongitudef = todisect.longitude
    console.log(currentlongitudef)
    console.log(currentlatitudef)
    foodList()
}


function foodList(){
        $.getJSON("/api/foods/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#foodResults').append(html);
        })
}



function getDistance(address,id){
    var splitAddress = address.split(' ')
    var joinAddress = splitAddress.join('+')
    var ronald = currentlatitudef + ',' + currentlongitudef
    console.log(ronald)
    $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+ronald+"&destinations="+joinAddress).done(function(results){
        var distance = results['rows'][0]['elements'][0]['distance'].text
        $("#dist" + id).html("Distance" + distance)
    })
}



Handlebars.registerHelper("showDistance", function(address, id) {
    getDistance(address, id)
})


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var currentlocal = new google.maps.LatLng(currentlatitudef, currentlongitudef);

function initialize(divey) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    center: currentlocal
  }
  map = new google.maps.Map((divey + "dirmap"), mapOptions);
  directionsDisplay.setMap((divey + "dirmap"));
}

Handlebars.registerHelper("initializeHelp", function(divey) {
    console.log(divey)
    initialize(divey)
})

function calcRoute(dest) {
  var request = {
      origin: currentlocal,
      destination: dest,
      travelMode: WALKING,
      unitSystem: UnitSystem.IMPERIAL,
      provideRouteAlternatives: false,
      region: String
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
    }
  });
}

Handlebars.registerHelper("calcRouteHelp", function(dest) {
    console.log(dest)
    calcRoute(dest)
})
