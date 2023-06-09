import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
      this.miFormulario.reset({
        ...this.persona,
        terminos: false
      });
      //para sincronizar los datos entre el formulario y la persona, menos los terminos
      this.miFormulario.valueChanges.subscribe( ({ terminos, ...restoDeArgumentos}) => {
        this.persona = restoDeArgumentos;
      })
  }

  guardar() {
    const formValue = {...this.miFormulario.value}
  }

}
