import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeloEntrega } from 'src/app/models/ModeloEntrega';


@Injectable({
  providedIn: 'root'
})
export class ModeloentregaService {

  apiUrl = 'https://localhost:5001/api/ModeloEntrega';

  constructor(private http: HttpClient) { }

  getModeloEntrega() {
    return this.http.get<[ModeloEntrega]>(this.apiUrl);
  }

  getModeloEntregaById(id: number) {
    return this.http.get<ModeloEntrega>(this.apiUrl + '/' + id);
  }

  deleteModeloEntrega(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createModeloEntrega(modeloentrega: ModeloEntrega) {
    return this.http.post<ModeloEntrega>(this.apiUrl, modeloentrega);
  }

  editModeloEntrega(modeloentrega: ModeloEntrega) {
    return this.http.put<ModeloEntrega>(this.apiUrl + '/' + modeloentrega.idModelo, modeloentrega);
  }
}
