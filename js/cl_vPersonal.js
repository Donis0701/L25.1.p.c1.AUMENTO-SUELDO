export default class cl_vPersonal {
    constructor(){
        this.inNombres = document.getElementById("personalForm_inNombres");
        this.inSueldo = document.getElementById("personalForm_inSueldo");
        this.inTrabajo = document.getElementById("personalForm_inTrabajo");
        this.btProcesar = document.getElementById("personalForm_btProcesar");
    }
    get nombres(){
        return this.inNombres.value;
    }
    get sueldo(){
        return +this.inSueldo.value;
    }
    get trabajo(){
        return +this.inTrabajo.value;
    }
}