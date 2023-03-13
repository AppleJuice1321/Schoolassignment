// choose your function and what it should be
 function skiftFarve(farve) {
    // Adds background color to our function ^
     document.querySelector(".skifterFarve").style.backgroundColor
     = farve;
     // Default background color
     document.querySelector(".skifterFarve").style.color = "white";
}

// skiftFarve("green");

// On click the link changes to the desired color
document.querySelector(".link1").addEventListener("click", function() {
    // calls for our function in the top
    skiftFarve("red");
});
document.querySelector(".link2").addEventListener("click", function() {
    skiftFarve("blue");
});
document.querySelector(".link3").addEventListener("click", function() {
    skiftFarve("pink");
});
document.querySelector(".link4").addEventListener("click", function() {
    skiftFarve("purple");
});
