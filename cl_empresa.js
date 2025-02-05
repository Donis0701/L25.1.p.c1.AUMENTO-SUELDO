export default class Empresa {
    constructor() {
        this.acMontE = 0
    }
    procesarPersonal(personal) {
        this.acMontE += personal.montE();
    }
    totalAumento() {
        return this.acMontE;
    }

}