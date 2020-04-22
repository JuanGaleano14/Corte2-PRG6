import { Component, OnInit } from '@angular/core';
import {Personas} from '../../interfaces/personas.interface';
import { PersonasService } from './../../_services/personas.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personas: Personas[] = [];
  columnsToDisplay = ['id', 'nombre', 'apellido', 'edad', 'estado' ];

  nombre = new FormControl('');
  apodo = new FormControl('');
  posicion = new FormControl('');
  imagen = new FormControl('');
  edad = new FormControl('');
  estado = new FormControl('');

  constructor(private servicioPersonas: PersonasService) {

  }

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
  
  guardar() {

    this.servicioPersonas.guardarPersonas(this.nombre.value, this.edad.value, this.apodo.value, this.imagen.value,
      this.posicion.value, this.estado.value).subscribe((snap) => {
      console.log(snap);
    });
    this.ngOnInit();
  }

}
