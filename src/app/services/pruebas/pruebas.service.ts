import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pruebas } from 'src/app/models/Pruebas';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  apiUrl = 'https://localhost:5001/api/Pruebas';

  constructor(private http: HttpClient) { }

  getPruebas() {
    return this.http.get<[Pruebas]>(this.apiUrl);
  }

  getPruebasById(id: number) {
    return this.http.get<Pruebas>(this.apiUrl + '/' + id);
  }

  deletePruebas(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createPruebas(pruebas: Pruebas) {
    return this.http.post<Pruebas>(this.apiUrl, pruebas);
  }

  editPruebas(pruebas: Pruebas) {
    return this.http.put<Pruebas>(this.apiUrl + '/' + pruebas.idPrueba, pruebas);
  }
}