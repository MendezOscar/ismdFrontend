import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from 'src/app/services/requerimiento/requerimiento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Requerimiento } from 'src/app/models/Requerimiento';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-editarrequerimiento',
  templateUrl: './editarrequerimiento.component.html',
  styleUrls: ['./editarrequerimiento.component.css']
})
export class EditarrequerimientoComponent implements OnInit {
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

  constructor(private requeriemitoService: RequerimientoService, private router: Router, private proyectoService: ProyectoService,
    private route: ActivatedRoute) {
    this.requerimiento = new Requerimiento();
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getRequerimientoById(id);
    this.getNavBar();
    this.getProyectos();
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

  getRequerimientoById(id: number) {
    this.requeriemitoService.getRequerimientoById(id).subscribe(data => {
      this.requerimiento = data;
      this.nombre = this.requerimiento.nombre;
      this.descripcion = this.requerimiento.descripcion;
      this.fecha = this.requerimiento.fecha;
      this.prioridad = this.requerimiento.prioridad;
      this.estado = this.requerimiento.estado;
      this.programador = this.requerimiento.programador;
     // this.idProyecto = this.requerimiento.idProyecto;
    });
  }

  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }


  editar() {
    this.requerimiento.nombre = this.nombre;
    this.requerimiento.descripcion = this.descripcion;
    this.requerimiento.fecha = this.fecha;
    this.requerimiento.prioridad = this.prioridad;
    this.requerimiento.estado = this.estado;
    this.requerimiento.programador = this.programador;   
     // tslint:disable-next-line: radix
    this.requerimiento.idProyecto = parseInt(this.idProyecto);
    this.requeriemitoService.editRequerimiento(this.requerimiento).subscribe(() => {
      this.router.navigate(['requerimiento']);
    });
  }

  cancel() {
    this.router.navigate(['requerimiento']);
  }

}
