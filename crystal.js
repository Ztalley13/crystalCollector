//game with 4 crystal
//give each crystal a value between 1-6
//game generates random score "randomNumber"
//number needs to generate a score when crystal is clicked (onClick)
//going to have to get the crystal to add  (math)
//if user click values equal range they win, if not they lose (if else)

var randomNumber;
var win;
var lose;
var prior = 0;
var start = function () {
    $(".crystals").empty();

    //to show random generated number
randomNumber = Math.floor(Math.random() * 35) +65;
    $("#result").html('Random Results:');
    console.log(randomNumber);

    console.log(win);
    //Generating the crystals
for(var i = 0; i < 4; i++){
    console.log("Hello World");
    
var random = Math.floor(Math.random() * 2) +10;
    console.log(random);

var crystals = $("<div>");
        crystals.attr({
            "class": 'crystals',
            "data-random": random});

    $(".crystals").append(crystal);

    //assign value to each crystal


start();    
$(document).on('click', ".crystals", function () {
   console.log($(this).attr("data-random"));

    })
}

    var result = num + 5;
    var num = parsInt($(this).attr("data-random"));
    console.log(num, ' + ', result);

    prior += num;
    console.log( previous);

   if(prior > randomNumber){
       lose--;
       
       $("#lose").html(lose);
       start();
    console.log("LOOOOOOOOOOOSER!!!!");
   }
   else if(prior === randomNumber){
       win++;
    console.log("Winner, Winner, Chicken Dinner!!!!!!")
      $("#win").html(win);
      start();

   }

    };