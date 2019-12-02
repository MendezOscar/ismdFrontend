import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cambios } from 'src/app/models/Cambios';
@Injectable({
  providedIn: 'root'
})
export class CambiosService {
  
  apiUrl = 'https://localhost:5001/api/Cambios';

  constructor(private http: HttpClient) { }

  getCambios() {
    return this.http.get<[Cambios]>(this.apiUrl);
  }

  getCambiosById(id: number) {
    return this.http.get<Cambios>(this.apiUrl + '/' + id);
  }

  deleteCambios(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCambios(cambios: Cambios) {
    return this.http.post<Cambios>(this.apiUrl, cambios);
  }

  editCambios(cambios: Cambios) {
    return this.http.put<Cambios>(this.apiUrl + '/' + cambios.idCambio, cambios);
  }
}
