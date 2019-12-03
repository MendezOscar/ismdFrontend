import { Component, OnInit } from '@angular/core';
import { IncidenteService } from 'src/app/services/incidente/incidente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Incidente } from 'src/app/models/Incidente';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-editarincidente',
  templateUrl: './editarincidente.component.html',
  styleUrls: ['./editarincidente.component.css']
})
export class EditarincidenteComponent implements OnInit {
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
    private proyectoService: ProyectoService,
              private route: ActivatedRoute) {
                this.incidente = new Incidente();
              }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getIncidenteById(id);
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

  getIncidenteById(id: number) {
    this.incidenteService.getIncidenteById(id).subscribe(data => {
      this.incidente = data;
      this.nombre = this.incidente.nombre;
      this.descripcion = this.incidente.descripcion;
      this.prioridad = this.incidente.prioridad;
     // this.idProyecto = this.incidente.idProyecto;
    });
  }
  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }

  editar() {
    this.incidente.nombre = this.nombre;
    this.incidente.descripcion = this.descripcion;
    this.incidente.prioridad = this.prioridad;
    // tslint:disable-next-line: radix
    this.incidente.idProyecto = parseInt(this.idProyecto);

    this.incidenteService.editIncidente(this.incidente).subscribe(() => {
      this.router.navigate(['incidente']);
    });
  }

  cancel (){
    this.router.navigate(['incidente']);
  }

}
