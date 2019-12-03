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

  constructor(private requerimientoService: RequerimientoService, private router: Router) { }

  ngOnInit() {
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