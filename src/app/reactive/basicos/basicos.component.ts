import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
/*
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('Objeto Cualquiera'),
    precio: new FormControl(0),
    existencias: new FormControl(5)
  })
*/
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ]  ],
  })

  constructor( private fb: FormBuilder ) {}

  campoEsValido( campo:string){
    return this.miFormulario.controls['nombre'].errors
          && this.miFormulario.controls['nombre'].touched;
  }

}
