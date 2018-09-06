var apiKey = "428cab4c11132bc1d3d3ebb205b514e7";
var username = "164342924@N05";
var searchInput = "";

$("#search-btn").click(function () {
    $('#photodiv').empty()

    var searchInput = $('#search-input').val();

    if (searchInput.length == 0) {
        console.log("warning")
    } else {
        $
            .ajax({
                url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&tags=" + searchInput + "&safe_search=0&per_page=25&&format=json&nojsoncallback=1",
                method: "GET"
            })
            .then(function (response) {
                var photos = response.photos.photo;
                //console.log(photos);
                // console.log(photos.photo[0].title);

                for (i = 0; i < photos.length; i++) {

                    // console.log(photos[i].id) console.log(photos[i].owner)
                    var farm = photos[i].farm
                    var server = photos[i].server
                    var secret = photos[i].secret
                    var id = photos[i].id
                    var phototitle = photos[i].title;
                    var photoid = photos[i].id;
                    var owner = photos[i].owner;
                    var url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg` + "&_s"

                    //console.log(url);

                    var imagediv = $("<div>");

                    var imagediv = $("<img>");
                    imagediv.attr("src", url)
                    imagediv.addClass("card-body")
                    imagediv.css("border-radius", "40px")

                    imagediv.height(175);
                    imagediv.width(200);

                    $("#photodiv").append(imagediv);

                }

                //const photo = Object.keys(photos.photo.title)   
                //console.log(photo) //
                

                //var type = typeof(photos);
                //console.log(type)

                //photos.forEach(photo => { console.log(photo) });

            });
    }
    //console.log("you searched: " + searchInput);

});

$("#recent-btn").click(function () {
    $('#photodiv').empty();  

   
            $.ajax({
                url: "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key="+apiKey+"&per_page=25&safe_search=0&format=json&nojsoncallback=1",       
                method: "GET"
            })
            .then(function (response) {
                var photos = response.photos.photo;
                //console.log(photos);
                // console.log(photos.photo[0].title);

                for (i = 0; i < photos.length; i++) {

                    // console.log(photos[i].id) console.log(photos[i].owner)
                    var farm = photos[i].farm
                    var server = photos[i].server
                    var secret = photos[i].secret
                    var id = photos[i].id
                    var phototitle = photos[i].title;
                    var photoid = photos[i].id;
                    var owner = photos[i].owner;
                    var url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg` + "&_s"

                    //console.log(url);

                    var imagediv = $("<div>");

                    var imagediv = $("<img>");
                    imagediv.attr("src", url)
                    imagediv.addClass("card-body")
                    imagediv.css("border-radius", "40px")

                    imagediv.height(175);
                    imagediv.width(200);

                    $("#photodiv").append(imagediv);

                }

                //const photo = Object.keys(photos.photo.title)   
                //console.log(photo) //
                

                //var type = typeof(photos);
                //console.log(type)

                //photos.forEach(photo => { console.log(photo) });

            });
    
    //console.log("you searched: " + searchInput);

});
