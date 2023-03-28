import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {

  //Para traer la referencia local del html
  @ViewChild('miFormulario') miFormulario!: NgForm;

  //Para hacer la validadcion del campo producto del html
  nombreValido():boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched
  }


  //guardar(miFormulario: NgForm) {
    guardar() {
    console.log(this.miFormulario);
  }
}
