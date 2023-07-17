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

//***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN


//Argumente sind daten für Parameter
//ausgabeNamen2("Tilli");
//ausgabeNamen2("Hubert");
//ausgabeNamen2("Lotta");

function ausgabeNamen2(firstName)
{
   // console.log("Hallo Max!");
    //console.log("Hallo Lucas!");
    //let = "Lucas";
    console.log("Hallo " + firstName + "!");
}

ausgabeNamenParams("Max", "Mütze");
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) 
{
    console.log("Hallo " + firstName + " " + familyName + "!"); 
}