import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usaurio } from 'src/app/models/Usaurio';
@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {
  usuario: Usaurio;
  nombre: string;
  clave: string;
  tipo: number;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.usuario = new Usaurio();
    this.usuario.username = this.nombre;
    this.usuario.clave = this.clave;
    this.usuario.tipo = this.tipo;

    this.usuarioService.createUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['usuario']);
    });
  }

  cancel() {
    this.router.navigate(['usuario']);
  }
 
}