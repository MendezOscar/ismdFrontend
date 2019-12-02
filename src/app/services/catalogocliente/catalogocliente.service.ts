import { Injectable } from '@angular/core';
import { CatalogoCliente} from 'src/app/models/CatalogoCliente';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatalogoclienteService {

  apiUrl = 'https://localhost:5001/api/CatalogoCliente';

  constructor(private http: HttpClient) { }

  getCatalogoCliente() {
    return this.http.get<[CatalogoCliente]>(this.apiUrl);
  }

  getCatalogoClienteById(id: number) {
    return this.http.get<CatalogoCliente>(this.apiUrl + '/' + id);
  }

  deleteCatalogoCliente(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCatalogoCliente(catalogoCliente: CatalogoCliente) {
    return this.http.post<CatalogoCliente>(this.apiUrl, catalogoCliente);
  }

  editCatalogoCliente(catalogoCliente: CatalogoCliente) {
    return this.http.put<CatalogoCliente>(this.apiUrl + '/' + catalogoCliente.idCatalogoCliente, catalogoCliente);
  }
}