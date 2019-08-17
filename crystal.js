//game with 4 crystal
//give each crystal a value between 1-6
//game generates random score "randomNumber"
//number needs to generate a score when crystal is clicked (onClick)
//going to have to get the crystal to add  (math)
//if user click values equal range they win, if not they lose (if else)

var randomNumber;
var win;
var lose;
//to show random generated number
    randomNumber = Math.floor(Math.random() * 35) +65;
    $("#result").html('Random Results:');
    //console.log(randomNumber);

//console.log(win);

for(var i = 0; i < 4; i++){
   // console.log("Hello World");
  
    
    var random = Math.floor(Math.random() * 2) +10;
    //console.log(random);

    var crystal = $("<div>");
        crystal.attr({"class": 'crystal',
        "data-random": random
    });

    $("#crystals").append(crystal);



}

$("#crystals").on('click', function () {
    console.log($(this).attr("data-random"));

});