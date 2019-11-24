import { Component, OnInit } from '@angular/core';
import { CapacidadService } from 'src/app/services/capacidad/capacidad.service';
import { Router } from '@angular/router';
import { Capacidad } from 'src/app/models/Capacidad';
@Component({
  selector: 'app-crearcapacidad',
  templateUrl: './crearcapacidad.component.html',
  styleUrls: ['./crearcapacidad.component.css']
})
export class CrearcapacidadComponent implements OnInit {
  capacidad: Capacidad;
  idProyecto: number;
  estado: string;
  monto: number;

  constructor(private capacidadService: CapacidadService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.capacidad = new Capacidad();
    this.capacidad.idProyecto= this.idProyecto;
    this.capacidad.estado = this.estado;
    this.capacidad.monto = this.monto;

    this.capacidadService.createCapacidad(this.capacidad).subscribe(() => {
      this.router.navigate(['capacidad']);
    });
  }

  cancel() {
    this.router.navigate(['capacidad']);
  }

}


