import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usaurio } from 'src/app/models/Usaurio';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usaurio[];

    constructor(private usuarioService: UsuarioService, private router: Router) { }
  
    ngOnInit() {
      this.getUsuario();
    }
  
    getUsuario() {
      this.usuarioService.getUsuario().subscribe(data => {
        this.usuario = data;
        console.log(this.usuario);
      });
    }
  
    crear() {
      this.router.navigate(['crearusuario']);
    }
  
    editar(id: number) {
      this.router.navigate(['editarusuario', id]);
    }
  
    deleteUsuario(id: number) {
      const res = confirm ('Estas seguro de eliminar este item?');
      if (res) {
        this.usuarioService.deleteUsuario(id).subscribe(() => {
          this.getUsuario();
        });
      }
    }
  
  }