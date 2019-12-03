import { Component, OnInit } from '@angular/core';
import { IncidenteService } from 'src/app/services/incidente/incidente.service';
import { Incidente } from 'src/app/models/Incidente';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-crearincidente',
  templateUrl: './crearincidente.component.html',
  styleUrls: ['./crearincidente.component.css']
})
export class CrearincidenteComponent implements OnInit {
  incidente: Incidente;
  nombre: string;
  descripcion: string;
  prioridad: number;
  idProyecto: string;
  proyectos: Proyecto[];

  
  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private incidenteService: IncidenteService, private router: Router,
              private proyectoService: ProyectoService) { }

  ngOnInit() {
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

  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }

  crear() {
    this.incidente = new Incidente();
    this.incidente.nombre = this.nombre;
    this.incidente.descripcion = this.descripcion;
    this.incidente.prioridad = this.prioridad;
    // tslint:disable-next-line: radix
    this.incidente.idProyecto = parseInt(this.idProyecto);

    this.incidenteService.createIncidente(this.incidente).subscribe(() => {
      this.router.navigate(['incidente']);
    });
  }

  cancel() {
    this.router.navigate(['incidente']);
  }

}
