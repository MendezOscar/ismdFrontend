import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Riesgo } from 'src/app/models/Riesgo';


@Injectable({
  providedIn: 'root'
})
export class RiesgoService {

  apiUrl = 'https://localhost:5001/api/Riesgo';

  constructor(private http: HttpClient) { }

  getRiesgo() {
    return this.http.get<[Riesgo]>(this.apiUrl);
  }

  getRiesgoById(id: number) {
    return this.http.get<Riesgo>(this.apiUrl + '/' + id);
  }

  deleteRiesgo(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createRiesgo(riesgo: Riesgo) {
    return this.http.post<Riesgo>(this.apiUrl, riesgo);
  }

  editRiesgo(riesgo: Riesgo) {
    return this.http.put<Riesgo>(this.apiUrl + '/' + riesgo.idRiesgo, riesgo);
  }
}