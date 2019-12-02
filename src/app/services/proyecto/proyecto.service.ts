import { Injectable } from '@angular/core';
import {Proyecto} from 'src/app/models/Proyecto'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  apiUrl = 'https://localhost:5001/api/Proyecto';

  constructor(private http: HttpClient) { }


  getProyecto() {
    return this.http.get<[Proyecto]>(this.apiUrl);
  }

  getProyectoById(id: number) {
    return this.http.get<Proyecto>(this.apiUrl + '/' + id);
  }

  deleteProyecto(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createProyecto(proyecto: Proyecto) {
    return this.http.post<Proyecto>(this.apiUrl, proyecto);
  }

  editProyecto(proyecto: Proyecto) {
    return this.http.put<Proyecto>(this.apiUrl + '/' + proyecto.idProyecto, proyecto);
  }
}
