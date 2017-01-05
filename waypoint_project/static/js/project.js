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
            console.log('oi')
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#foodResults').append(html);
        })
}

foodList()
