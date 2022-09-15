$(document).ready(function(){
    $.getJSON("team.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#team").append(
                    "<div>" +
                    "<p class='bold'> Name: <span class='noBold'>" + value.name + "</span></p>" +
                    "<p class='bold'> Title: <span class='noBold'>" + value.title + "</span></p>" +
                    "<p class='bold'> Department: <span class='noBold'>" + value.department + "</span></p>" +
                    "<p class='bold'> Bio: <span class='noBold'>" + value.bio + "</span></p>" +
                    "</div>"
                );
            });
        });
    });
});
    