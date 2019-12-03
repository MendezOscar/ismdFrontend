import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-crearproyecto',
  templateUrl: './crearproyecto.component.html',
  styleUrls: ['./crearproyecto.component.css']
})
export class CrearproyectoComponent implements OnInit {
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

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit() {
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

  crear() {
    this.proyecto = new Proyecto();
    this.proyecto.nombre = this.nombre;
    this.proyecto.descripcion = this.descripcion;
    this.proyecto.solicitante = this.solicitante;
    this.proyecto.encargado = this.encargado;
    this.proyecto.documentacion = this.documentacion;

    this.proyectoService.createProyecto(this.proyecto).subscribe(() => {
      this.router.navigate(['proyecto']);
    });
  }

  cancel() {
    this.router.navigate(['proyecto']);
  }

}
