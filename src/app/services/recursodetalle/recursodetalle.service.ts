import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecursoDetalle } from 'src/app/models/RecursoDetalle';

@Injectable({
  providedIn: 'root'
})
export class RecursodetalleService {
  apiUrl = 'https://localhost:5001/api/RecursoDetalle';

  constructor(private http: HttpClient) { }


  getRecursoDetalle() {
    return this.http.get<[RecursoDetalle]>(this.apiUrl);
  }

  getRecursoDetalleById(id: number) {
    return this.http.get<RecursoDetalle>(this.apiUrl + '/' + id);
  }

  deleteRecursoDetalle(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createRecursoDetalle(recursodetalle: RecursoDetalle) {
    return this.http.post<RecursoDetalle>(this.apiUrl, recursodetalle);
  }

  editRecursoDetalle(recursodetalle: RecursoDetalle) {
    return this.http.put<RecursoDetalle>(this.apiUrl + '/' + recursodetalle.idRecursoDet, recursodetalle);
  }
}
