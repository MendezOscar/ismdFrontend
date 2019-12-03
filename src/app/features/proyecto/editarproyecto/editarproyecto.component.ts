import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {
  proyecto: Proyecto;
  nombre: string;
  descripcion: string;
  solicitante: string;
  encargado: string;
  documentacion: string;

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private proyectoService: ProyectoService, private router: Router,
              private route: ActivatedRoute) {
                this.proyecto = new Proyecto();
              }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getProyectoServiceById(id);
    this.getNavBar();
  }

  getNavBar() {
    this.userType =  localStorage.getItem('user');
    if (this.userType === '1') {
      this.admin = true;
    } else if (this.userType === '2') {
      this.dev = true;
    } else if (this.userType === '3') {
      this.client = true;
    }
  }

  getProyectoServiceById(id: number) {
    this.proyectoService.getProyectoById(id).subscribe(data => {
      this.proyecto = data;
      this.nombre = this.proyecto.nombre;
      this.descripcion = this.proyecto.descripcion;
      this.solicitante = this.proyecto.solicitante;
      this.encargado = this.proyecto.encargado;
      this.documentacion = this.proyecto.documentacion;
    });
  }

  editar() {
    this.proyecto.nombre = this.nombre;
    this.proyecto.descripcion = this.descripcion;
    this.proyecto.solicitante = this.solicitante;
    this.proyecto.encargado = this.encargado;
    this.proyecto.documentacion = this.documentacion;

    this.proyectoService.editProyecto(this.proyecto).subscribe(() => {
      this.router.navigate(['proyecto']);
    });
  }

  cancel (){
    this.router.navigate(['proyecto']);
  }

}
