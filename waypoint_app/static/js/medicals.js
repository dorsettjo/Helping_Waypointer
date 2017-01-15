navigator.geolocation.getCurrentPosition(whereareyou)

var currentlatitudem = 40.712784;
var currentlongitudem = -74.005941;

function whereareyou(positioncurrent) {
    var todisect = positioncurrent.coords
    currentlatitudem = todisect.latitude
    currentlongitudem = todisect.longitude
    console.log(currentlongitudem)
    console.log(currentlatitudem)
}

function medicalList(){
        $.getJSON("/api/medicals/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#medicalResults').append(html);
        })
}
medicalList()


function getDistance(address,id){
    var splitAddress = address.split(' ')
    var joinAddress = splitAddress.join('+')
    var ronald = currentlatitudem + ',' + currentlongitudem
    console.log(ronald)
    // return joinAddress
    $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+ronald+"&destinations="+joinAddress).done(function(results){
        var distance = results['rows'][0]['elements'][0]['distance'].text
        $("#dist" + id).html(distance)
    })
}



Handlebars.registerHelper("showDistance", function(address, id) {
    console.log(address)
    getDistance(address, id)
    // console.log(distance)
    // return distance
})
