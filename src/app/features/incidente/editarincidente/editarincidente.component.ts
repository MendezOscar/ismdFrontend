import { Component, OnInit } from '@angular/core';
import { IncidenteService } from 'src/app/services/incidente/incidente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Incidente } from 'src/app/models/Incidente';

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
  idProyecto: number;

  constructor(private incidenteService: IncidenteService, private router: Router,
              private route: ActivatedRoute) {
                this.incidente = new Incidente();
              }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getIncidenteById(id);
  }

  getIncidenteById(id: number) {
    this.incidenteService.getIncidenteById(id).subscribe(data => {
      this.incidente = data;
      this.nombre = this.incidente.nombre;
      this.descripcion = this.incidente.descripcion;
      this.prioridad = this.incidente.prioridad;
      this.idProyecto = this.incidente.idProyecto;
    });
  }

  editar() {
    this.incidente.nombre = this.nombre;
    this.incidente.descripcion = this.descripcion;
    this.incidente.prioridad = this.prioridad;
    this.incidente.idProyecto = this.idProyecto;

    this.incidenteService.editIncidente(this.incidente).subscribe(() => {
      this.router.navigate(['incidente']);
    });
  }

  cancel (){
    this.router.navigate(['incidente']);
  }

}
