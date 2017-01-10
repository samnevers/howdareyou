
var students = {
    ahi: [
        ["YOU OWE ME YOUR FAVE MEMORY OR GOODBYE MESSAGE MOTHERFUCKER"],
    ],
    drew: [
        ["YOU OWE ME YOUR FAVE MEMORY OR GOODBYE MESSAGE MOTHERFUCKER"]
    ],
    emmanuel: [
        ["badger can't hear me whispering to him"]
    ],
    esther: [
        ["Thanks Badger for all your help! You have been very entertaining! All the best in your next role. I'm sure you will do great !"]

    ],
    ewelina: [
        ["What do you mean, Ewelina?"],
        ["What?!"]
    ],
    mario: [
        "I'm about to press BADGER Destroy_all from my database"
    ],
    rhys: [
        ["YOU OWE ME YOUR FAVE MEMORY OR GOODBYE MESSAGE MOTHERFUCKER"]
    ],
    rozen: [
        ["Rozen, you can't hide behind your laptop screen!"]

    ],
    sam: [
        ["YOU OWE ME YOUR FAVE MEMORY OR GOODBYE MESSAGE MOTHERFUCKER"]
    ],
    steve: [
        ["YOU OWE ME YOUR FAVE MEMORY OR GOODBYE MESSAGE MOTHERFUCKER"]
    ],
    tim: [
        ["YOU OWE ME YOUR FAVE MEMORY OR GOODBYE MESSAGE MOTHERFUCKER"]
    ],
    ned: [
        ["YOU OWE ME YOUR FAVE MEMORY OR GOODBYE MESSAGE MOTHERFUCKER"]
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

$(document).ready(function() {

    $(".photos").on("click", function() {
        var student = $(this).attr("id");
        showActivities(student);
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
