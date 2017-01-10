
var students = {
    ahi: [
        ["I am obviously too devastated - I have no words."],
    ],
    drew: [
        ["Did I ever tell you you're my hero? You're everything, everything I wish I could be. Oh, and I, I could fly higher than an eagle, For you are the wind beneath my wings, 'cause you are the wind beneath my wings."],
        ["If you are a certain type of badger, you are a rock badger. Because you were everyone's rock. No homo."]
    ],
    emmanuel: [
        ["Hey Badger... Hey Badger... Hey Badger..."],
        ["Great pep talk, Badger! Though you can't hear me whispering to you..."]
    ],
    esther: [
        ["Thanks Badger for all your help! You have been very entertaining! All the best in your next role. I'm sure you will do great !"]

    ],
    ewelina: [
        ["What do you mean, Ewelina?"],
        ["What?!"]
    ],
    mario: [
        ["I'm about to press BADGER Destroy_all from my database"],
        ["Fav Badger moment... when he told us that joke about Number 42... oh sorry, that was Jack..."],
        ["Fav actual Badger moment... when he said, \"Mario... you are the best looking developer I've ever met..\". Okay, he never said that... but that still remains my fav Badger moment."]
    ],
    rhys: [
        ["I am obviously too devastated - I have no words."]
    ],
    rozen: [
        ["Rozen, you can't hide behind your laptop screen!"]
    ],
    sam: [
        ["\"Hey Badger, do you wanna go sort that duck out?\" - Wolf"],
        ["\"HORSE BRUTALITY PARTY\" - Badger"],
        ["\"WHY THE FUCK CAN I HEAR THE BACKSTREET BOYS???\""],
        ["Every single time Badger cried from \"allergies\""]
    ],
    steve: [
        ["Badger is my \"Google\" during project weeks. Thank you so much, I really appreciate it!"]
    ],
    tim: [
        ["Fav Badger moment…. Every time he touched my computer…. 'Oh God! What’d i do??...get fuck’d….fuck this…..fuckin' vim!'"]
    ],
    ned: [
        ["Thanks Badger for all your help with the impossible question. Going to miss that luxurious lions mane."]
    ],
    james: [
        "Fav Badger moment… in relation to our (my) spelling mistake on group project and Badger pointing it out during our Demo! 'I just thought it was funny that you have this _really_ fuckin' cool app, and the only thing wrong with it was a typo in the name of the app.'"]
};

var studs = Object.keys(students);

var current;
var $el;

var showActivities = function(student) {

    $(".overlay").fadeToggle();
    var name = $(this).attr("id");
    var activities = students[student];
    var $heading = $("<h2></h2>");
    $heading.text(student);
    current = student;
    $(".text-block").append($heading);
    for (var i = 0; i < activities.length; i++) {
        var $para;
        if (Array.isArray(activities[i])) {
            $para = $("<a></a>");
            $para.text(activities[i][0]);
            $para.attr("href", activities[i][1]);
            $para.attr("target", "_blank");
        } else {
            $para = $("<p></p>");
            $para.text(activities[i]);
        }
        $(".text-block").append($para);
    }
};

var sorryBadger = function() {

    $(".bgoverlay").fadeToggle();

};

$(document).ready(function() {

    $(".photos").on("click", function() {
        var student = $(this).attr("id");
        showActivities(student);
    });

    $( "h1" ).on( "click", function () {
        sorryBadger();
    });

    $( ".bgoverlay" ).on( "click", function () {
        $( ".bgoverlay" ).fadeToggle();
    });

    $('.slideshow').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });

    $(".close").on("click", function() {
        $(".text-block").empty();
        $(".overlay").fadeToggle();
    });

    $(".arrow").on("click", function() {
        $el = $(this);
        $(".text-block").empty();
        $(".overlay").fadeToggle(function () {
            var currentIndex = studs.indexOf(current);
            var next;
            if ($el.hasClass("right")) {
                if (currentIndex + 1 < studs.length)
                    next = studs[currentIndex + 1];
                else {
                    next = studs[0];
                }
            } else {
                if (currentIndex - 1 >= 0) {
                    next = studs[currentIndex - 1];
                } else {
                    next = studs[studs.length - 1];
                }
            }
            showActivities(next);
        });
    });
});
