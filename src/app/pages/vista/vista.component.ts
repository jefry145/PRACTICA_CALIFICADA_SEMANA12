import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
//CONTADOR
contador!:number
//VALORES LLEGADOS
nombre!:string
apellido!:string
edad!:string

direccion!:string
celular!:string
correo!:string
sexo!:string

biografia!:string
curso1!:string
descripcioncurso1!:string
curso2!:string
descripcioncurso2!:string

Niveleducativo!:string
lugarDeEstudio!:string
fechaInicioEstudio!:string
fechaFinalEstudio!:string



tecnico1!:string
tecnico2!:string
tecnico3!:string
tecnico4!:string

Trabajo!:string
LugarTrabj!:string
TimeTrabj!:string
descripcionDeTrabajo!:string

show=false


  @Input()
  textohijo2:any;

  mostrar(){
    console.log(this.textohijo2)
    for (let i = 0; i < this.textohijo2.length; i++) {
       this.contador= i;
    }
    if (this.textohijo2[this.contador].correo === undefined || this.textohijo2[this.contador].historia === undefined || this.textohijo2[this.contador].sexo === undefined) {
      alert("Rellena primero el formulario")
  }else{
    
    this.show=true

    this.nombre=this.textohijo2[this.contador].nombre
    this.apellido=this.textohijo2[this.contador].apellido
    this.correo=this.textohijo2[this.contador].correo
    this.celular=this.textohijo2[this.contador].celular
    this.sexo=this.textohijo2[this.contador].sexo
    this.edad=this.textohijo2[this.contador].edad
    this.biografia=this.textohijo2[this.contador].historia
    this.direccion=this.textohijo2[this.contador].direccion

    this.curso1=this.textohijo2[this.contador].curso1
    this.descripcioncurso1=this.textohijo2[this.contador].descCurso1

    this.curso2=this.textohijo2[this.contador].curso2
    this.descripcioncurso2=this.textohijo2[this.contador].descCurso2

    this.Niveleducativo=this.textohijo2[this.contador].conocimiento

    this.tecnico1=this.textohijo2[this.contador].tecnico1
    this.tecnico2=this.textohijo2[this.contador].tecnico2
    this.tecnico3=this.textohijo2[this.contador].tecnico3
    this.tecnico4=this.textohijo2[this.contador].tecnico4

    this.lugarDeEstudio=this.textohijo2[this.contador].EstudiosLugar
    this.fechaInicioEstudio=this.textohijo2[this.contador].fechaEstudiosInicio
    this.fechaFinalEstudio=this.textohijo2[this.contador].fechaEstudiosFinal

    this.Trabajo=this.textohijo2[this.contador].XPtrabj
    this.LugarTrabj=this.textohijo2[this.contador].lugarTrabj
    this.TimeTrabj=this.textohijo2[this.contador].TimeTrabj
    this.descripcionDeTrabajo=this.textohijo2[this.contador].descTrabj
  }
  }
}
