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
        $("#dist" + id).html(distance)
    })
}



Handlebars.registerHelper("showDistance", function(address, id) {
    getDistance(address, id)
})

//
//
// function makeMap(address,id){
//     var objectforgoogle = {
//       origin: currentlatitudef + ',' + currentlongitudef,
//       destination: this.address,
//       travelMode: WALKING,
//       unitSystem: UnitSystem.IMPERIAL,
//       provideRouteAlternatives: false,
//       region: String
//     }
//     var splitAddress = address.split(' ')
//     var joinAddress = splitAddress.join('+')
//     var ronald = currentlatitudef + ',' + currentlongitudef
//     console.log(ronald)
//     // return joinAddress
//     $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+ronald+"&destinations="+joinAddress).done(function(results){
//         var distance = results['rows'][0]['elements'][0]['distance'].text
//         $("#dist" + id).html(distance)
//     })
// }
//
//
//
// Handlebars.registerHelper("showMap", function(address, id) {
//     console.log(address)
//     makeMap(address, id)
// })
//
//
//
// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
// var map;
//
// function initialize() {
//   directionsDisplay = new google.maps.DirectionsRenderer();
//   var chicago = new google.maps.LatLng(41.850033, -87.6500523);
//   var mapOptions = {
//     zoom:7,
//     center: chicago
//   }
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   directionsDisplay.setMap(map);
// }
//
// function calcRoute() {
//   var start = document.getElementById('start').value;
//   var end = document.getElementById('end').value;
//   var request = {
//     origin: start,
//     destination: end,
//     travelMode: 'DRIVING'
//   };
//   directionsService.route(request, function(result, status) {
//     if (status == 'OK') {
//       directionsDisplay.setDirections(result);
//     }
//   });
// }
//
// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
// var map;
// var currentlocal = new google.maps.LatLng(currentlatitudef, currentlongitudef);
//
// function initialize() {
//   directionsDisplay = new google.maps.DirectionsRenderer();
//   var mapOptions = {
//     zoom: 14,
//     center: currentlocal
//   }
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   directionsDisplay.setMap(map);
// }
//
// function calcRoute(dest) {
//   var request = {
//       origin: currentlocal,
//       destination: dest,
//       // Note that Javascript allows us to access the constant
//       // using square brackets and a string value as its
//       // "property."
//       travelMode: WALKING,
//       unitSystem: UnitSystem.IMPERIAL,
//       provideRouteAlternatives: false,
//       region: String
//   };
//   directionsService.route(request, function(response, status) {
//     if (status == 'OK') {
//       directionsDisplay.setDirections(response);
//     }
//   });
// }

// Handlebars.registerHelper("showDistance", function(distance) {
//     var splitAddress = address.split(' ')
//     var joinAddress = splitAddress.join('+')
//     // return joinAddress
//     $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?origins=35.7778208,-78.6388908&destinations="+joinAddress).done(function(results){
//         var distance = results
//         console.log(distance['rows'][0]['elements'][0]['distance'].text)
//         return distance['rows'][0]['elements'][0]['distance'].text;
//     })
//
// })
