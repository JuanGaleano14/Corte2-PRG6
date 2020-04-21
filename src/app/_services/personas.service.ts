import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personas } from './../interfaces/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  obtenerPersonas(){
    return this.http.get('https://api-mi-liga.now.sh/api/jugadores');

  }

}


