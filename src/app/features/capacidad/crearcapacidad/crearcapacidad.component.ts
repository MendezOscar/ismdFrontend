import { Component, OnInit } from '@angular/core';
import { CapacidadService } from 'src/app/services/capacidad/capacidad.service';
import { Router } from '@angular/router';
import { Capacidad } from 'src/app/models/Capacidad';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
@Component({
  selector: 'app-crearcapacidad',
  templateUrl: './crearcapacidad.component.html',
  styleUrls: ['./crearcapacidad.component.css']
})
export class CrearcapacidadComponent implements OnInit {
  capacidad: Capacidad;
  idProyecto: string;
  proyectos: Proyecto[];
  estado: string;
  monto: number;

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private capacidadService: CapacidadService,private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit() {
    this.getNavBar();
    this.getProyectos();
  }

  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }

  crear() {
    this.capacidad = new Capacidad();
  //  this.capacidad.idProyecto = this.idProyecto;
      // tslint:disable-next-line: radix
      this.capacidad.idProyecto = parseInt(this.idProyecto);
    this.capacidad.estado = this.estado;
    this.capacidad.monto = this.monto;

    this.capacidadService.createCapacidad(this.capacidad).subscribe(() => {
      this.router.navigate(['capacidad']);
    });
  }

  cancel() {
    this.router.navigate(['capacidad']);
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

}


