/**
 * JS - Aula 07: Tabuada
 * @author: Professor José de Assis
 */

/** 
  * Tabuada do 7
var valor = 7;

for (var i = 1; i < 11; i++) {
    document.write(valor + " x " + i + " = " + (valor * i) + "<br>");
}
*/

//Encadear o laço for

for (var i = 1; i < 11; i++) {
    document.write("<p>Tabuada do " + i + "</p>");
    for (var j = 1; j < 11; j++) {
        document.write(i + " x " + j + " = " + (i * j) + "<br>");
    }
}