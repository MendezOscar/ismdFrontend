import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecursoEncabezado } from 'src/app/models/RecursoEncabezado';

@Injectable({
  providedIn: 'root'
})
export class RecursoencabezadoService {
  apiUrl = 'https://localhost:5001/api/RecursoEncabezado';
  constructor(private http: HttpClient) { }


  getRecursoEncabezazdo() {
    return this.http.get<[RecursoEncabezado]>(this.apiUrl);
  }

  getRecursoEncabezadoById(id: number) {
    return this.http.get<RecursoEncabezado>(this.apiUrl + '/' + id);
  }

  deleteRecursoEncabezado(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createRecursoEncabezado(recursoencabezado: RecursoEncabezado) {
    return this.http.post<RecursoEncabezado>(this.apiUrl, recursoencabezado);
  }

  editRecursoEncabezado(recursoencabezado: RecursoEncabezado) {
    return this.http.put<RecursoEncabezado>(this.apiUrl + '/' + recursoencabezado.idRecurso, recursoencabezado);
  }
}
