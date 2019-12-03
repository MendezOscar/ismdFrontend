import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CapacidadService } from 'src/app/services/capacidad/capacidad.service';
import { Capacidad } from 'src/app/models/Capacidad';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';


@Component({
  selector: 'app-editarcapacidad',
  templateUrl: './editarcapacidad.component.html',
  styleUrls: ['./editarcapacidad.component.css']
})
export class EditarcapacidadComponent implements OnInit {
  capacidad: Capacidad;
  idProyecto: string;
  proyectos: Proyecto[];
  estado: string;
  monto: number;

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private capacidadService: CapacidadService,
    private proyectoService: ProyectoService, private router: Router, private route: ActivatedRoute) {
    this.capacidad = new Capacidad();
  }


  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCapacidadById(id);
    this.getProyectos();
  }

  getCapacidadById(id: number) {
    this.capacidadService.getCapacidadById(id).subscribe(data => {
      this.capacidad = data;
     // this.idProyecto = this.capacidad.idProyecto;
      this.estado = this.capacidad.estado;
      this.monto = this.capacidad.monto;
    });
  }

  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }

  editar() {
  //  this.capacidad.idProyecto = this.idProyecto;
      // tslint:disable-next-line: radix
      this.capacidad.idProyecto = parseInt(this.idProyecto);
    this.capacidad.estado = this.estado;
    this.capacidad.monto = this.monto;

    this.capacidadService.editCapacidad(this.capacidad).subscribe(() => {
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