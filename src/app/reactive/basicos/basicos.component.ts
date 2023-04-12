import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    nombre: [ 'Pantalla LENOVO' ],
    precio: [ 0 ],
    existencias: [ 0 ],
  })

  constructor( private fb: FormBuilder ) {}

}
