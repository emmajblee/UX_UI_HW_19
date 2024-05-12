console.log ("your index.js file is loaded correctly");

$(document) .ready(function(){
    $(".Card1").click(function(){
        $(".CardPanel1").slideToggle("slow");
        $(".Card1 img").toggleClass("toggleArrow")
    })
})

$(document) .ready(function(){
    $(".Card2").click(function(){
        $(".CardPanel2").slideToggle("slow");
        $(".Card2 img").toggleClass("toggleArrow")
    })
})

$(document) .ready(function(){
    $(".Card3").click(function(){
        $(".CardPanel3").slideToggle("slow");
        $(".Card3 img").toggleClass("toggleArrow")
    })
})