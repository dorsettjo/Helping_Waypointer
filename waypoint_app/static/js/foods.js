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
    // zipcodeList(currentlatitudef, currentlongitudef)
}

//
// function zipcodeList(currentlatitudef, currentlongitudef) {
//     var zipurl = "https://api.geonames.org/findNearbyPostalCodes?lat=" + currentlatitudef +"&lng=" + currentlongitudef + "&country=US&radius=10&username=Ronaldcoor"
//     $.ajax({
//         url: zipurl,
//     }).done(function(data) {
//         console.log(data)
//         foodList()
//     })
// }


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
