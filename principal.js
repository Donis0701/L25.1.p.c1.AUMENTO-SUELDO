/*En una empresa se asignara un aumento del 20% a todo el personal obreo con "1" y 
un 10% al personal administrativo denominado con "2".La empresa necesita determinar cuanto es el 
total del monto adicional que debera pagar en la proxima quincena.*/
import Personal from "./cl_personal.js";
import Empresa from "./cl_empresa.js";

let personal1 = new Personal("Jorge", 100, 1);
let personal2 = new Personal("Maria", 120, 1);
let personal3 = new Personal("Carlos", 200, 2);
let personal4 = new Personal("Luis", 50, 1);
let personal5 = new Personal("Pedro", 150, 2);

let empresa = new Empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>${personal1.nombres} tiene un aumento de ${personal1.montE()}
<br>${personal2.nombres} tiene un aumento de ${personal2.montE()}
<br>${personal3.nombres} tiene un aumento de ${personal3.montE()}
<br>${personal4.nombres} tiene un aumento de ${personal4.montE()}
<br>${personal5.nombres} tiene un aumento de ${personal5.montE()}
<br>Total aumento que debe pagar la empresa: ${empresa.totalAumento()}`;