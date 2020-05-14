import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personas } from './../interfaces/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  id: string;
  constructor(private http: HttpClient) { }

  obtenerPersonas(){
    return this.http.get('https://localhost/angulardb/consultados.php');

  }

  guardarPersonas(nombre: string, edad: string, apodo: string, imagen: string, posicion: string, estado: string) {

    return this.http.get('https://localhost/angulardb/guardar.php?nombre=' + nombre +
     '&edad=' + edad + '&apodo=' + apodo + '&foto=' + imagen + '&posicion=' + posicion + '&estado='
      + estado);

  }

  eliminarPersonas(id: string) {

    return this.http.get('https://localhost/angulardb/eliminar.php?id=' + id);

  }

  setId(id: string) {
    this.id = id;
  }

  getId(id: string) {
    return this.id;
  }

  editarPersonas(nombre: string, edad: string, apodo: string, imagen: string, posicion: string, estado: string) {
    return this.http.get('https://localhost/angulardb/editar.php?nombre=' + nombre +
    '&edad=' + edad + '&apodo=' + apodo + '&foto=' + imagen + '&posicion=' + posicion + '&estado='
     + estado + '&id=' + this.id);
  }

}


