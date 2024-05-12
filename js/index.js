console.log ("your index.js file is loaded correctly");

$(document) .ready(function(){
    $(".Card1").click(function(){
        $(".CardPanel1").slideDown("slow");
    })
})

$(document) .ready(function(){
    $(".Card2").click(function(){
        $(".CardPanel2").slideDown("slow");
    })
})

$(document) .ready(function(){
    $(".Card3").click(function(){
        $(".CardPanel3").slideDown("slow");
    })
})