export default class cl_mEmpresa {
    constructor() {
        this.acMontE = 0
        this.personal= "";
        this.montoExtra = 0;
    }
    procesarPersonal(personal) {
        this.personal = personal.nombres;
        this.montoExtra = personal.montE();
        this.acMontE += personal.montE();
    }  
    totalAumento() {
        return this.acMontE;
    }

}