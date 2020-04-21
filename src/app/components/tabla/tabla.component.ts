import { Component, OnInit } from '@angular/core';
import {Personas} from '../../interfaces/personas.interface';
import { PersonasService } from './../../_services/personas.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personas: Personas[] = [];
  columnsToDisplay = ['id', 'nombre', 'apellido', 'edad', 'estado' ];

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

}
