navigator.geolocation.getCurrentPosition(whereareyou)

var currentlatitudel = 40.712784;
var currentlongitudel = -74.005941;

function whereareyou(positioncurrent) {
    var todisect = positioncurrent.coords
    currentlatitudel = todisect.latitude
    currentlongitudel = todisect.longitude
    console.log(currentlongitudel)
    console.log(currentlatitudel)
    legalList()
}

function legalList(){
        $.getJSON("/api/legals/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#legalResults').append(html);
        })
}

function getDistance(address,id){
    var splitAddress = address.split(' ')
    var joinAddress = splitAddress.join('+')
    var ronald = currentlatitudel + ',' + currentlongitudel
    console.log(ronald)
    // return joinAddress
    $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+ronald+"&destinations="+joinAddress).done(function(results){
        var distance = results['rows'][0]['elements'][0]['distance'].text
        $("#dist" + id).html("Distance: " + distance)
    })
}



Handlebars.registerHelper("showDistance", function(address, id) {
    console.log(address)
    getDistance(address, id)
    // console.log(distance)
    // return distance
})
