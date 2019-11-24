import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Proveedor} from 'src/app/models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  apiUrl = 'https://localhost:5001/api/Proveedor';

  constructor(private http: HttpClient) { }

  getProveedor() {
    return this.http.get<[Proveedor]>(this.apiUrl);
  }

  getProveedorById(id: number) {
    return this.http.get<Proveedor>(this.apiUrl + '/' + id);
  }

  deleteProveedor(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createProveedor(proveedor: Proveedor) {
    return this.http.post<Proveedor>(this.apiUrl, proveedor);
  }

  editProveedor(proveedor: Proveedor) {
    return this.http.put<Proveedor>(this.apiUrl + '/' + proveedor.idProveedor, proveedor);
  }
}

