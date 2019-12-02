import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'https://localhost:5001/api/Usuario';

  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get<[Usuario]>(this.apiUrl);
  }

  getUsuarioById(id: number) {
    return this.http.get<Usuario>(this.apiUrl + '/' + id);
  }

  deleteUsuario(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  editUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.apiUrl + '/' + usuario.idUsuario, usuario);
  }
}