
$(".door").click(function(event){
    event.preventDefault();
    var url = "getdeath?q=";
     $.getJSON(url,function(data) {
    var everything;
    everything = "<ul>";
    $.each(data, function(i,item) {
        everything += '<div class="card" style="width: 18rem;">'
                     + '<div class="card-body">'
                     + '<p class="card-text">'
                     + data[i].city;
                     + '</p>'
                     + '</div>'; 
        });
        everything += '</div>';
        $("#owldef").html(everything);
    });
});
