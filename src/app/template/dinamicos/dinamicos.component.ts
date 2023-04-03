import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Carlos',
    favoritos: [
      {id:1, nombre: 'Super Mario'},
      {id:2, nombre: 'Fornite'},
      {id:3, nombre: 'Need For Speed'}
    ]
  }

  //const nombre = this.miFormulario.controls['nombre'].value;

  guardar() {
    console.log('Formulario posteado');
  }

  eliminar ( indice: number ) {

    this.persona.favoritos.splice(indice, 1);
  }

  agregar(){

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }

    //para no mandar una referencia y usar un objeto limpio hacemos el spread
    this.persona.favoritos.push( {...nuevoFavorito} );
    this.nuevoJuego = '';
  }

}
