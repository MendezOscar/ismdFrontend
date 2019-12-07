import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from 'src/app/services/requerimiento/requerimiento.service';
import { Router } from '@angular/router';
import { Requerimiento } from 'src/app/models/Requerimiento';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
@Component({
  selector: 'app-crearrequerimiento',
  templateUrl: './crearrequerimiento.component.html',
  styleUrls: ['./crearrequerimiento.component.css']
})
export class CrearrequerimientoComponent implements OnInit {
  requerimiento: Requerimiento;
  nombre: string;
  descripcion: string;
  fecha: Date;
  prioridad: string;
  estado: string;
  programador: string;
  idProyecto: string;
  proyectos: Proyecto[];

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private requerimientoService: RequerimientoService,private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit() {
    this.getNavBar();
    this.getProyectos();
  }

  getNavBar() {
    this.userType = localStorage.getItem('user');
    if (this.userType === '1') {
      this.admin = true;
    } else if (this.userType === '2') {
      this.dev = true;
    } else if (this.userType === '3') {
      this.client = true;
    }
  }

  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }

  crear() {
    this.requerimiento = new Requerimiento();
    this.requerimiento.nombre = this.nombre;
    this.requerimiento.descripcion = this.descripcion;
    this.requerimiento.fecha = this.fecha;
    this.requerimiento.prioridad = this.prioridad;
    this.requerimiento.estado = this.estado;
    this.requerimiento.programador = this.programador; 
       // tslint:disable-next-line: radix
    this.requerimiento.idProyecto = parseInt(this.idProyecto);

    this.requerimientoService.createRequerimiento(this.requerimiento).subscribe(() => {
      this.router.navigate(['requerimiento']);
    });
  }

  cancel() {
    this.router.navigate(['requerimiento']);
  }

}