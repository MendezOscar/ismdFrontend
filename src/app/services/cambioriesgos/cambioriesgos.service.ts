import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CambioRiesgo } from 'src/app/models/CambioRiesgos';


@Injectable({
  providedIn: 'root'
})
export class CambioriesgosService {

  apiUrl = 'https://localhost:5001/api/CambioRiesgos';

  constructor(private http: HttpClient) { }

  getCambioRiesgos() {
    return this.http.get<[CambioRiesgo]>(this.apiUrl);
  }

  getCambioRiesgosById(id: number) {
    return this.http.get<CambioRiesgo>(this.apiUrl + '/' + id);
  }

  deleteCambioRiesgos(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCambioRiesgos(cambioriesgos: CambioRiesgo) {
    return this.http.post<CambioRiesgo>(this.apiUrl, cambioriesgos);
  }

  editCambioRiesgos(cambioriesgos: CambioRiesgo) {
    return this.http.put<CambioRiesgo>(this.apiUrl + '/' + cambioriesgos.idCambioRiego, cambioriesgos);
  }
}
