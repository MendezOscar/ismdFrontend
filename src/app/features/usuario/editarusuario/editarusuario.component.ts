import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
  usuario: Usuario;
  nombre: string;
  clave: string;
  tipo:number;

    constructor(private usuarioService: UsuarioService, private router: Router,
                private route: ActivatedRoute) {
                  this.usuario = new Usuario(); 
                }
  
    ngOnInit() {
      // tslint:disable-next-line: radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getUsuarioById(id);
    } 
  
    getUsuarioById(id: number) {
      this.usuarioService.getUsuarioById(id).subscribe(data => {
        this.usuario = data;
        this.nombre = this.usuario.nombre;
        this.clave = this.usuario.clave;
        this.tipo = this.usuario.tipo;
      });
    }
  
    editar() {
      this.usuario.nombre = this.nombre;
      this.usuario.clave = this.clave;
      this.usuario.tipo = this.tipo;
  
      this.usuarioService.editUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['usuario']);
      });
    }
  
    cancel (){
      this.router.navigate(['usuario']);
    }
  
  }
  
