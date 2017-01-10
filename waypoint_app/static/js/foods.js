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



function foodList(){
        $.getJSON("/api/foods/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#foodResults').append(html);
        })
}
foodList()


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
