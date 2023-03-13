document.addEventListener('DOMContentLoaded', function() {
 
    document.querySelector("#DivClassPoint1").addEventListener("mouseover", function(){
        // Kør funktionen vispunkt1info();
       vispunkt1info();
    });

    document.querySelector("#DivClassPoint1").addEventListener("mouseout", function(){
        // Kør funktionen gempunkt1info();
        gempunkt1info();
    });

    // lav nu selv de næste 2 til DivKassePunkt2
    document.querySelector("#DivClassPoint2").addEventListener("mouseover", function(){
        // Kør funktionen vispunkt2info();
       vispunkt2info();
    });

    document.querySelector("#DivClassPoint2").addEventListener("mouseout", function(){
        // Kør funktionen gempunkt2info();
        gempunkt2info();
    });
});

// Marker 1
function vispunkt1info() {
    document.querySelector("#PTag1").style.display = 'inline-block';
}

function gempunkt1info() {
    document.querySelector("#PTag1").style.display = 'none';
}

// Marker 2
function vispunkt2info() {
    document.querySelector("#PTag2").style.display = 'inline-block';
}

function gempunkt2info() {
    document.querySelector("#PTag2").style.display = 'none';
}