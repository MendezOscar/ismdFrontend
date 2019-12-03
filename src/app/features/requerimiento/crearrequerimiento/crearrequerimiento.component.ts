import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from 'src/app/services/requerimiento/requerimiento.service';
import { Router } from '@angular/router';
import { Requerimiento } from 'src/app/models/Requerimiento';
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
  idProyecto: number;

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private requerimientoService: RequerimientoService, private router: Router) { }

  ngOnInit() {
    this.getNavBar();
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


  crear() {
    this.requerimiento = new Requerimiento();
    this.requerimiento.nombre = this.nombre;
    this.requerimiento.descripcion = this.descripcion;
    this.requerimiento.fecha = this.fecha;
    this.requerimiento.prioridad = this.prioridad;
    this.requerimiento.estado = this.estado;
    this.requerimiento.programador = this.programador;
    this.requerimiento.idProyecto = this.idProyecto;

    this.requerimientoService.createRequerimiento(this.requerimiento).subscribe(() => {
      this.router.navigate(['requerimiento']);
    });
  }

  cancel() {
    this.router.navigate(['requerimiento']);
  }

}