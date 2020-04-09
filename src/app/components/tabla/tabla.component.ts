import { Component, OnInit } from '@angular/core';
import {Personas} from '../../interfaces/personas.interface'
import * as PERSONAS from './../../../assets/data/personas.json'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personas: Personas[];
  columnsToDisplay = ['id', 'nombre', 'apellido', 'edad', 'estado' ];

  constructor() {

  }

  ngOnInit() {

    this.personas = (PERSONAS as any).data;
    console.log(this.personas);

  }

}
