import { Injectable } from '@angular/core';
import { Capacidad } from 'src/app/models/Capacidad';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CapacidadService {
  
  apiUrl = 'https://localhost:5001/api/Capacidad';

  constructor(private http: HttpClient) { }

  getCapacidad() {
    return this.http.get<[Capacidad]>(this.apiUrl);
  }

  getCapacidadById(id: number) {
    return this.http.get<Capacidad>(this.apiUrl + '/' + id);
  }

  deleteCapacidad(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCapacidad(capacidad: Capacidad) {
    return this.http.post<Capacidad>(this.apiUrl, capacidad);
  }

  editCapacidad(capacidad: Capacidad) {
    return this.http.put<Capacidad>(this.apiUrl + '/' + capacidad.idCapacidad, capacidad);
  }
}
