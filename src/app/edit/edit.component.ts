import { Component, OnInit } from '@angular/core';
import {Personas} from '../interfaces/personas.interface';
import { PersonasService } from './../_services/personas.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  personas: Personas[] = [];

  nombre = new FormControl('');
  apodo = new FormControl('');
  posicion = new FormControl('');
  imagen = new FormControl('');
  edad = new FormControl('');
  estado = new FormControl('');

  constructor(private servicioPersonas: PersonasService) { }

  ngOnInit() {
    this.llamarServicio();
  }

  llamarServicio() {
   /* this.http.get('https://api-mi-liga.now.sh/api/jugadores').subscribe((personas: Personas[])=>{
      console.log(personas);
      this.personas = personas;
    });*/

      this.servicioPersonas.obtenerPersonas().subscribe((personas: Personas[])=>{
        console.log(personas);
        this.personas = personas;
      });
  }

  editar() {

    this.servicioPersonas.editarPersonas(this.nombre.value, this.edad.value, this.apodo.value, this.imagen.value,
      this.posicion.value, this.estado.value).subscribe((snap) => {
      console.log(snap);
    });
    this.ngOnInit();
  }

}
