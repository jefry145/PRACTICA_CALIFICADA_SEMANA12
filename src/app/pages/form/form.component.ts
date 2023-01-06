import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 
  
//VALORES

  nombre!:string;
  apellido!:string;
  edad!:string;
  celular!:string;
  correo!:string;
  direccion!:string;


  biografia!:string
  estudios!:string
  
  listado(event:any){
    this.estudios = event.target.value;
  }

  Curso1!:string
  Curso1desc!:string
   
  Curso2!:string
  Curso2desc!:string
  tecnico1!:string 
  tecnico2!:string
  tecnico3!:string
  tecnico4!:string

  fechaEstudiosInicio!:string
  fechaEstudiosFinal!:string
  EstudiosLugar!:string

  XPtrabj!:string
  lugarTrabj!:string
  TimeTrabj!:string
  descTrabj!:string



  sexo!:string
  
  //EXPORTANDO VALIDACION
  validacion:any

  radiochange(event:any){
    this.sexo = event.target.value;
  }


//OBJETO JSON
contenido=[
  {nombre:" " , apellido:" " , edad:"" ,celular:"" , correo:"" , direccion: "" , sexo: "" , historia: "" , curso1: "" , descCurso1: "" , curso2:"" , descCurso2:"" , conocimiento: "" , tecnico1:"" , tecnico2:"" , tecnico3:"" , tecnico4:"" , fechaEstudiosInicio:"" , fechaEstudiosFinal:"" , EstudiosLugar:"" , XPtrabj:"" , lugarTrabj:"" , TimeTrabj:"" , descTrabj:"" , valid:""}
];
data=Object.values(this.contenido);

//ENVIAR DATOS
@Output() Pasardatospadre = new EventEmitter<any>();

enviar(){
  alert(this.validacion)
  this.contenido.push({ nombre:this.nombre , apellido:this.apellido , edad:this.edad , celular:this.celular , correo:this.correo , direccion: this.direccion , sexo: this.sexo , historia:this.biografia , curso1: this.Curso1 , descCurso1:this.Curso1desc , curso2:this.Curso2 , descCurso2:this.Curso2desc , conocimiento: this.estudios , tecnico1:this.tecnico1 , tecnico2:this.tecnico2 , tecnico3:this.tecnico3 , tecnico4:this.tecnico4 , fechaEstudiosInicio:this.fechaEstudiosInicio , fechaEstudiosFinal:this.fechaEstudiosFinal , EstudiosLugar:this.EstudiosLugar , XPtrabj:this.XPtrabj , lugarTrabj:this.lugarTrabj , TimeTrabj:this.TimeTrabj , descTrabj:this.descTrabj , valid:this.validacion});
  this.data = Object.values(this.contenido);
  this.Pasardatospadre.emit(this.data);
 console.log(this.data)

}
  


//VALIDACIONES
  public formLogin!: FormGroup;
  constructor(private formBuilder:FormBuilder){
  
  }
   ngOnInit():void{
    this.formLogin = this.formBuilder.group({
      msg:['', 
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],
     option:['', 
      [
        Validators.required,
      ]
    ],
    email:['', 
      [
        Validators.required,
        Validators.email
      ]
    ],
    })
    this.validacion=this.formLogin.valid
  }
  
}
