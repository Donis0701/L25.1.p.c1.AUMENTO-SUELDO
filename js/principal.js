/*En una empresa se asignara un aumento del 20% a todo el personal obreo con "1" y 
un 10% al personal administrativo denominado con "2".La empresa necesita determinar cuanto es el 
total del monto adicional que debera pagar en la proxima quincena.*/
import cl_mEmpresa from "./cl_mEmpresa.js";
import cl_vEmpresa from "./cl_vEmpresa.js";
import cl_controlador from "./cl_controlador.js";
export default class cl_principal {
    constructor() {
        let vista = new cl_vEmpresa();
        let modelo = new cl_mEmpresa();
        let controlador = new cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}
