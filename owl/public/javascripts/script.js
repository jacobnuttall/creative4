/* global $ */


$(".door").click(function(event){
    event.preventDefault();
    var url = "getdeath?q=";
     $.getJSON(url,function(data) {
    var everything;
    everything = "<ul>";
    $.each(data, function(i,item) {
        everything += '<div class="card" style="width: 18rem;">'
                     + '<span class="card-title"><h3><strong>Your fate is...</strong></h3></span>'
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

$("#submit").click(function(event) {
   var url="fate";
   event.preventDefault;
   console.log(event);
   var fate = { "fate": $("#text-input").val() };
   fate = JSON.stringify(fate);
   console.log(url);
   $.post('fate',  fate , function(data, text) {
       console.log(data);
   });
});