function shelterList(){
        $.getJSON("/api/shelters/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#shelterResults').append(html);
        })
}
shelterList()


function getDistance(address,id){
    var splitAddress = address.split(' ')
    var joinAddress = splitAddress.join('+')
    var ronald = getCoords(lat, lon)
    console.log(ronald)
    // return joinAddress
    $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&callback=?&origins=35.7778208,-78.6388908&destinations="+joinAddress).done(function(results){
        var distance = results['rows'][0]['elements'][0]['distance'].text
        $("#dist" + id).html(distance)
    })
}

function getCoords(lat, lon){
    console.log('test')
    console.log(lon)
    console.log('endtest')
    return lat + lon;
}


Handlebars.registerHelper("showDistance", function(address, id) {
    console.log(address)
    getDistance(address, id)
    // console.log(distance)
    // return distance
})
