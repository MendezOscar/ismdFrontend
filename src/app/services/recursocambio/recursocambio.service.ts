import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecursoCambio} from 'src/app/models/RecursoCambio';
@Injectable({
  providedIn: 'root'
})
export class RecursocambioService {

  apiUrl = 'https://localhost:5001/api/RecursoCambio';

  constructor(private http: HttpClient) { }

  getRecursoCambio() {
    return this.http.get<[RecursoCambio]>(this.apiUrl);
  }

  getRecursoCambioById(id: number) {
    return this.http.get<RecursoCambio>(this.apiUrl + '/' + id);
  }

  deleteRecursoCambio(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createRecursoCambio(recursocambio: RecursoCambio) {
    return this.http.post<RecursoCambio>(this.apiUrl, recursocambio);
  }

  editRecursoCambio(recursocambio: RecursoCambio) {
    return this.http.put<RecursoCambio>(this.apiUrl + '/' + recursocambio.idRecursoCambio, recursocambio);
  }
}