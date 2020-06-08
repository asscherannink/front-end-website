/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
// controle of de console.log het doet
console.log("Hello world!");

//functie om het Id-element "weg" op display;none te zetten en om ID-element"dankje" tevoorschijn te halen met display;Block
function myFunction() {
    document.getElementById("weg").style.display = "none";
    document.getElementById("dankje").style.display = "block";
}
//als er op button met class;knop wordt gedrukt (click) start de de functie met de naam myFuction
document.querySelector(".knop").addEventListener("click", myFunction);
