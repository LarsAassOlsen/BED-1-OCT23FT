$.ajax ({
    url: 'https://api.giphy.com/v1/gifs/random?api_key=YmS4313DmJiBErocfObqqtfVvr482Nm4&rating=g',
    success: function(response) {
        console.log(response)
        var originalUrl = response.data.images.original.url;
        $("body").append("<img src = '" + originalUrl + "'></img>")
        if (response.data.user != null) {
            var originalUserUrl = response.data.user.avatar_url;
            $("body").append("<img src='" + originalUserUrl + "'></img>")
        }
    },
    error: function () {
        console.log("Something went wrong!");
    }
})