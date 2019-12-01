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

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private capacidadService: CapacidadService, private router: Router) { }

  ngOnInit() {
    this.getNavBar();
  }

  crear() {
    this.capacidad = new Capacidad();
    this.capacidad.idProyecto = this.idProyecto;
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


