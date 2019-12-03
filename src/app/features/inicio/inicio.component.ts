import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';
import { IncidenteService } from 'src/app/services/incidente/incidente.service';
import { Incidente } from 'src/app/models/Incidente';
import { Cambios } from 'src/app/models/Cambios';
import { CambiosService } from 'src/app/services/cambios/cambios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;
  proyectos: Proyecto[];
  incidentes: Incidente[];
  cambios: Cambios[];

  constructor(private proyectoService: ProyectoService, private incidenteService: IncidenteService,
              private cambiosService: CambiosService) { }

  ngOnInit() {
    this.getNavBar();
    this.getProyectos();
    this.getIncidentes();
    this.getCambios();
  }

  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }

  getCambios() {
    this.cambiosService.getCambios().subscribe(data => {
      this.cambios = data;
    });
  }

  getIncidentes() {
    this.incidenteService.getIncidente().subscribe(data => {
      this.incidentes = data;
    });
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
