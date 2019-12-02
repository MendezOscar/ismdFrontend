import { Component, OnInit } from '@angular/core';
import { IncidenteService } from 'src/app/services/incidente/incidente.service';
import { Incidente } from 'src/app/models/Incidente';
import { Router } from '@angular/router';

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
  idProyecto: number;

  constructor(private incidenteService: IncidenteService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.incidente = new Incidente();
    this.incidente.nombre = this.nombre;
    this.incidente.descripcion = this.descripcion;
    this.incidente.prioridad = this.prioridad;
    this.incidente.idProyecto = this.idProyecto;

    this.incidenteService.createIncidente(this.incidente).subscribe(() => {
      this.router.navigate(['incidente']);
    });
  }

  cancel() {
    this.router.navigate(['incidente']);
  }

}
