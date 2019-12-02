import { Injectable } from '@angular/core';
import { CatalogoTecnico} from 'src/app/models/CatalogoTecnico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogotecnicoService {
  apiUrl = 'https://localhost:5001/api/CatalogoTecnico';

  constructor(private http: HttpClient) { }

  getCatalogoTecnico() {
    return this.http.get<[CatalogoTecnico]>(this.apiUrl);
  }

  getCatalogoTecnicoById(id: number) {
    return this.http.get<CatalogoTecnico>(this.apiUrl + '/' + id);
  }

  deleteCatalogoTecnico(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCatalogoTecnico(catalogoTecnico: CatalogoTecnico) {
    return this.http.post<CatalogoTecnico>(this.apiUrl, catalogoTecnico);
  }

  editCatalogoTecnico(catalogoTecnico: CatalogoTecnico) {
    return this.http.put<CatalogoTecnico>(this.apiUrl + '/' + catalogoTecnico.idCatalogoTec, catalogoTecnico);
  }
}
