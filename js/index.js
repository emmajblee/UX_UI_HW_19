console.log ("your index.js file is loaded correctly");

$(document) .ready(function(){
    $(".Card1").click(function(){
        $(".CardPanel1").slideToggle("slow");
    })
})

$(document) .ready(function(){
    $(".Card2").click(function(){
        $(".CardPanel2").slideToggle("slow");
    })
})

$(document) .ready(function(){
    $(".Card3").click(function(){
        $(".CardPanel3").slideToggle("slow");
    })
})