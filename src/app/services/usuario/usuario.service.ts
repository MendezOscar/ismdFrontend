import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usaurio } from 'src/app/models/Usaurio';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'https://localhost:5001/api/Usuario';

  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get<[Usaurio]>(this.apiUrl);
  }

  getUsuarioById(id: number) {
    return this.http.get<Usaurio>(this.apiUrl + '/' + id);
  }

  getUserByName(username: string, clave: string ) {
    return this.http.get<Usaurio>(this.apiUrl + '/' + username + '/' + clave);
  }

  deleteUsuario(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createUsuario(usuario: Usaurio) {
    return this.http.post<Usaurio>(this.apiUrl, usuario);
  }

  editUsuario(usuario: Usaurio) {
    return this.http.put<Usaurio>(this.apiUrl + '/' + usuario.idUsuario, usuario);
  }
}
