import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requerimiento } from 'src/app/models/Requerimiento';

@Injectable({
  providedIn: 'root'
})
export class RequerimientoService {

  apiUrl = 'https://localhost:5001/api/Requerimiento';

  constructor(private http: HttpClient) { }

  getRequerimiento() {
    return this.http.get<[Requerimiento]>(this.apiUrl);
  }

  getRequerimientoById(id: number) {
    return this.http.get<Requerimiento>(this.apiUrl + '/' + id);
  }

  deleteRequerimiento(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createRequerimiento(requerimiento: Requerimiento) {
    return this.http.post<Requerimiento>(this.apiUrl, requerimiento);
  }

  editRequerimiento(requerimiento: Requerimiento) {
    return this.http.put<Requerimiento>(this.apiUrl + '/' + requerimiento.idRequerimiento, requerimiento);
  }
}