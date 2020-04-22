import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personas } from './../interfaces/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  obtenerPersonas(){
    return this.http.get('https://localhost/angulardb/consultados.php');

  }

  guardarPersonas(nombre: string, edad: string, apodo: string, imagen: string, posicion: string, estado: string){
   
    return this.http.get('https://localhost/angulardb/guardar.php?nombre=' + nombre +
     '&edad=' + edad + '&apodo=' + apodo + '&foto=' + imagen + '&posicion=' + posicion + '&estado='
      + estado);

  }

}


