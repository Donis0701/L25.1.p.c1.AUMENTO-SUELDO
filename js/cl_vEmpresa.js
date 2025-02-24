import cl_mPersonal from "./cl_mPersonal.js";
import cl_vPersonal from "./cl_vPersonal.js";
export default class cl_vEmpresa{
    constructor() {
        this.controlador = null;
        this.lblpersonal = document.getElementById("mainForm_lblpersonal");
        this.lbltotalAumento = document.getElementById("mainForm_lbltotalAumento");
        this.vPersonal = new cl_vPersonal();
        this.vPersonal.btProcesar.onclick = () => this.controlador.procesarPersonal();
    }
    procesarPersonal() {
        this.mPersonal = new cl_mPersonal({
            nombres: this.vPersonal.nombres,
            sueldo : this.vPersonal.sueldo,
            trabajo : this.vPersonal.trabajo 
        })
        return this.mPersonal;
}
    reportarPersonal(personal,montoExtra,totalAumento) {
        this.lblpersonal.innerHTML += personal + " tiene un aumento de:$" + montoExtra + "<br>";
        this.lbltotalAumento.innerHTML = totalAumento;
    }
    
}