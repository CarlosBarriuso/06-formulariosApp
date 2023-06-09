import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  a:number = 0;
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      [ 'WRC9' ],
      [ 'Super Mario' ]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) {}

  campoEsValido( campo:string){
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched;
  }

  agregaFavorito() {
    if ( this.nuevoFavorito.invalid){
      return;
    }
    //this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );
    this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ));
    this.nuevoFavorito.reset();
  }

  guardar(){

    if ( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  borrar( indice:number){
    this.favoritosArr.removeAt(indice);
  }
}
