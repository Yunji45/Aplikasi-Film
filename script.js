
function pencarian (){
    $('#movie-list').html('');
    $.ajax ({
        url: 'http://omdbapi.com/',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : 'isi dengan API-Key anda',
            's' : $('#search-input').val()
        },
        success : function(penerima){
            if (penerima.Response === "True"){

                let film = penerima.Search;
                
                $.each (film, function(i,data){
                    $('#movie-list').append(`
                    <div class = "col-md-4">
                        <div class="card mb-3">
                        <img src="` + data.Poster + `" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">` + data.Title + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                        </div>
                        </div>
                    </div>
                    `);
                });
                $('#search-input').val ('');

            }else {
                $('#movie-list').html(`

                <div class ="col">
                    <h1 class = "text-center">` + penerima.Error + `</h1>
                </div>
                
                
                `);
            }

        }


    });
}

$('#search-button').on('click' , function(){
    pencarian();
});

$('#search-input').on('keyup' , function(e){
    if (e.which === 13){
        pencarian();
    }
});

