navigator.geolocation.getCurrentPosition(whereareyou)


var currentlatitudet = 40.712784;
var currentlongitudet = -74.005941;


function whereareyou(positioncurrent) {
    var todisect = positioncurrent.coords
    currentlatitudet = todisect.latitude
    currentlongitudet = todisect.longitude
    transportationList()
}


function transportationList(){
        $.getJSON("/api/transportations/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#transportationResults').append(html);
        })
}


function getDistance(city,id){
    var splitAddress = city.split(' ')
    var joinAddress = splitAddress.join('+')
    var ronald = currentlatitudet + ',' + currentlongitudet
    $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+ronald+"&destinations="+joinAddress).done(function(results){
        var distance = results['rows'][0]['elements'][0]['distance'].text
        $("#dist" + id).html("Distance: " + distance)
    })
}


Handlebars.registerHelper("showDistance", function(address, id) {
    getDistance(address, id)
})
