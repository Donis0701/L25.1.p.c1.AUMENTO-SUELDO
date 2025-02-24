export default class cl_mPersonal {
    constructor({nombres,sueldo,trabajo}) {
        this.nombres = nombres;
        this.sueldo = sueldo;
        this.trabajo = trabajo;
    }
    set nombres(n) {
        this._nombres = n;
    }
    set sueldo(s) {
        this._sueldo = +s;
    }
    set trabajo(t) {
        this._trabajo = t;
    }
    get nombres() {
        return this._nombres;
    }
    get sueldo() {
        return this._sueldo;
    }
    get trabajo() {
        return this._trabajo;
    }
    montE(){
        if (this.trabajo == 1) {
           return  this.sueldo * 0.2;
        }else if (this.trabajo == 2) {
          return   this.sueldo * 0.1;
        }
    }
}