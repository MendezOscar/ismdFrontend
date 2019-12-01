import { Component, OnInit } from '@angular/core';
import { CapacidadService } from 'src/app/services/capacidad/capacidad.service';
import { Router } from '@angular/router';
import { Capacidad } from 'src/app/models/Capacidad';

@Component({
  selector: 'app-capacidad',
  templateUrl: './capacidad.component.html',
  styleUrls: ['./capacidad.component.css']
})
export class CapacidadComponent implements OnInit {
  capacidad: Capacidad[];
  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;


  constructor(private capacidadService: CapacidadService, private router: Router) { }

  ngOnInit() {
    this.getCapacidad();
    this.getNavBar();
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

  getCapacidad() {
    this.capacidadService.getCapacidad().subscribe(data => {
      this.capacidad = data;
      console.log(this.capacidad);
    });
  }

  crear() {
    this.router.navigate(['crearcapacidad']);
  }

  editar(id: number) {
    this.router.navigate(['editarcapacidad', id]);
  }

  deleteCapacidad(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.capacidadService.deleteCapacidad(id).subscribe(() => {
        this.getCapacidad();
      });
    }
  }

}
