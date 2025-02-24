export default class cl_controlador{
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPersonal() {
        this.modelo.procesarPersonal(this.vista.procesarPersonal());
        this.vista.reportarPersonal(this.modelo.personal,this.modelo.montoExtra,this.modelo.totalAumento());
    }
}