console.log ("your index.js file is loaded correctly");

$(document) .ready(function(){
    $(".Card1").click(function(){
        $(".CardPanel1").slideDown("slow");
    })
})