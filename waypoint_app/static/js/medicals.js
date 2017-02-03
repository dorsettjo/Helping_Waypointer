var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

navigator.geolocation.getCurrentPosition(whereareyou, error, options)


var currentlatitudem = 40.712784;
var currentlongitudem = -74.005941;


function whereareyou(positioncurrent) {
    var todisect = positioncurrent.coords
    currentlatitudem = todisect.latitude
    currentlongitudem = todisect.longitude
    medicalList()
}


function medicalList(){
        $.getJSON("/api/medicals/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#medicalResults').append(html);
        })
}


function getDistance(address,id){
    var splitAddress = address.split(' ')
    var joinAddress = splitAddress.join('+')
    var ronald = currentlatitudem + ',' + currentlongitudem
    $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+ronald+"&destinations="+joinAddress).done(function(results){
        var distance = results['rows'][0]['elements'][0]['distance'].text
        $("#dist" + id).html("Distance: " + distance)
    })
}


function error(){
    var errormessage = "Could not determine location"
    $('#foodResults').append(errormessage);
}


Handlebars.registerHelper("showDistance", function(address, id) {
    getDistance(address, id)
})
