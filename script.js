
/* Testar om JavaScript-filen fungerar och är korrekt kopplad till HTML-filen
console.log("Hello från script.js!");
tar bort kommentarer när du vill testa koden.
*/ 


//Uppgift 2: Variabel och Scope.

//console.log("innan Blocket"); // med console.log innan blocket kommer koden att 
// ej defineras (meddelandet: reference error) eftersom variablerna inte är deklarerade än.
// vi deklarerar variablerna inuti blocket 
{
 let name = "Taher"; 
 const age = 40;
 var city = "Borlänge";    

 console.log(name);
 console.log(age);
 console.log(city);
 console.log("Hello " + name + ", you are " + age + " years old and live in " + city + ".");
 console.log(`Hello ${name}, you are ${age} years old and live in ${city}.`); 
 // vi kan använda backticks för att skriva ut variabler i en sträng.
}

//console.log("Hello " + name + ", you are " + age + " years old and live in " + city + "."); 
// med console.log efter blocket kommer inte att fungera eftersom variablerna är
//  deklarerade inuti blocket och inte är tillgängliga utanför blocket.
// det betyder att variablerna har block scope och inte är tillgängliga utanför 
// blocket alltså let och const har block scope medan var har function scope.





// Uppgift 3: funktion för att addera tal
const addNumber = (num1, num2) => {
    return num1 + num2;
}
 
console.log(addNumber(5, 10)); //15
// om vi skriver addNumber = 4 senare i koden kommer vi att få ett felmeddelande 
// eftersom vi inte kan ändra på en const variabel. så med const funtionen är skyddad. 
//addNumber = 4; 
//console.log(addNumber); //ta bort kommentarer när du vill testa koden.

/*

let addNumber = (num1, num2) => {   
  return num1 + num2;
}
console.log(addNumber(5, 10)); // 15
addNumber = 4; // detta kommer att skriva ut 4 eftersom vi har deklarerat add med let istället för const.
console.log(addNumber); // detta kommer att skriva ut 4 eftersom vi har deklarerat add med let istället för const.
//ta bort kommentarer när du vill testa koden.
*/


/*
Reflektion till uppgift 3:
1. när vi skapar variablerna med let istället för const så har 
funktionen fungerat likadant men skillnade är när vi använder Let,
 då kan vi ändra på funktionen senare  i koden men med const så kan 
 vi inte ändra på funktionen efteråt eftersom const är konstant 
 och kan inte ändras efter att variablerna har deklarerats och kastar 
 ett felmeddelande så med const är funktionen skyddad och det ger säkrare 
 kod och minskar risken för misstag.

 2. det är samma funktion med arrow funktion.
 */
function greet(name) {
    return "Hello " + name + "!";
}
console.log(greet("Taher")); 
/*
skillnaden är att funktiondeklaration hoistas och kan anropas innan 
den är deklarerad medan arrow funktioner sparas i en variabel och 
kan inte anropas innan den är defineras. 

3. att en retunerar något betyder att funktionen kommer att skicka 
tillbaka ett värde till den plats där den anropas. i detta fall kommer
 funktionen add att returnera summan av två tal som skickas in som argument till funktionen.

*/

// uppgift 4 

const add = (num1, num2) => {   
    
    console.log(num1 == 0); // True
    console.log(num2 === '0'); // False 
    console.log(num2 === 0);  // False 
    console.log(num1 == NaN); // False

    console.log(num1 ? "truthy" : "falsy"); 
    if  (
        num1 !== null &&
        num1 !== undefined &&
        num2 !== null &&
        num2 !== undefined &&
        typeof num1 === "number" &&
        typeof num2 === "number"
    ) { 
        return num1 + num2;
    } else {
        console.log ( "invalid input");
        return undefined;
    }
}



// Reflektion till uppgift 4:
/* 1. Ternatory operatorn är en kortare sätt att skriva en villkor sats. 
den fungerar som en if-else sats men på en rad. 
där vi använder ? för att utvärdera villkoret och : som annars för att skriva ut 
ett värde om villkoret är falskt. 
2. == jämför värderna och kan omvandla datatyper automatiskt medan 
=== jämför både värderna och datatyperna utan typkonvertering.
3. jag löste if-satsen villkor genom att använda !== för säkerställa att 
num1 eller num2 inte är null eller undefined och använde typeof för att säkerställa 
att båda variablarna är nummrena 
och använde && (och operatorn) för att uppfylla alla villkor i if-satsen.   
*/

// uppgift 5

const num1 = 0;
let arg1; 
let sum = false; 
console.log("**** test 1 *****")
console.log (add(sum , 1));

console.log("**** test 2 *****")
 sum = add ("0", 3); 
 console.log (sum);

 console.log("**** test 3 *****")
 console.log(add(3, "num1"));

 console.log("**** test 4 *****")
 sum = add(-5, num1) 
 console.log (sum); 

 console.log("**** test 5 *****")
 console.log (add(arg1, 7));

 console.log("**** test 6 *****")
 console.log(add()); 

 console.log(num1); 



/* Reflektion uppgift 5
1. en parameter är ett namn i funktionens definition (num1) som har en plats. 
ett argument är det faktiska värde som skickas in när den anropas, t ex 3 i add(3,4). 
En variabel är ett namngivna värde skapat med const eller let, t ex sum och arg1. 
Argument som kan vara en variabel eller ett direkt värde 

2. i slutet skrivs ut 0. den globala num1 är lika med 0 och förändrar sig inte. 
Paramtern num1 är en seperat variabel i funktionen som overskattar globala variabeln på 
så vis att tetst 4 inte kommer att påverka globala variabeln. 

3. Test 4, add(-5, num1), parametern num1 kommer att vara lika med -5 och num2 
kommer att vara lika med 0 (den globala num1)
- sammanfattningar kommer att ge falskt, falskt,riktigt,falskt.
- En ternäruttryck kommer att evalureas till "riktigt" (-5 är ett riktigt värde)
- If-blocken : inget värde är null/undefined, båda värden 
har tal och inget värde är NaN. villkoret blir sant och koden loopar igenom if-blocken.
-returvärde är -5 som sparas i sum.

*/

