"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

//Funktionsrumpf (body) | callee
// Funktionsgeklaration
function test()
{
console.log("Hallo Max!");
}

// Funktionsaufruf (call)

test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
ausgabeNamen();

function ausgabeNamen() 
{
   // console.log("Hallo Max!");
    //console.log("Hallo Lucas!");
    let firstName = "Lucas";
    console.log("Hallo " + firstName + "!");
}

//console.log(firstName); //Fehler --> SCOPE! (gültigkeitsbereich von Variablen)