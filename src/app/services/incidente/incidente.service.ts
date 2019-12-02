import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incidente } from 'src/app/models/Incidente';

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {
  apiUrl = 'https://localhost:5001/api/Incidente';

  constructor(private http: HttpClient) { }

  getIncidente() {
    return this.http.get<[Incidente]>(this.apiUrl);
  }

  getIncidenteById(id: number) {
    return this.http.get<Incidente>(this.apiUrl + '/' + id);
  }

  deleteIncidente(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createIncidente(incidente: Incidente) {
    return this.http.post<Incidente>(this.apiUrl, incidente);
  }

  editIncidente(incidente: Incidente) {
    return this.http.put<Incidente>(this.apiUrl + '/' + incidente.idIncidente, incidente);
  }
}