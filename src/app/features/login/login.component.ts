import { Component, OnInit } from '@angular/core';
import { Usaurio } from 'src/app/models/Usaurio';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clave: string;
  cuenta: string;
  usuario: Usaurio;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  getUser() {
    this.usuarioService.getUserByName(this.cuenta, this.clave).subscribe(data => {
      this.usuario = data;
      this.router.navigate(['/inicio']);
      localStorage.setItem('user', this.usuario.tipo.toString());
    });
  }



}
