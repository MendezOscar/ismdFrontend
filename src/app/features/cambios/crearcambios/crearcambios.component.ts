import { Component, OnInit } from '@angular/core';
import { CambiosService } from 'src/app/services/cambios/cambios.service';
import { Router } from '@angular/router';
import { Cambios } from 'src/app/models/Cambios';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-crearcambios',
  templateUrl: './crearcambios.component.html',
  styleUrls: ['./crearcambios.component.css']
})
export class CrearcambiosComponent implements OnInit {

  cambios: Cambios;
  solicitante: string;
  razon: string;
  idProyecto: string;
  proyectos: Proyecto[];

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;


  constructor(private cambiosService: CambiosService, private router: Router,
    private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.getNavBar();
    this.getProyectos();
  }

  getNavBar() {
    this.userType = localStorage.getItem('user');
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
    this.cambios = new Cambios();
    this.cambios.solicitante = this.solicitante;
    this.cambios.razon = this.razon;
        // tslint:disable-next-line: radix
        this.cambios.idProyecto = parseInt(this.idProyecto);

    this.cambiosService.createCambios(this.cambios).subscribe(() => {
      this.router.navigate(['cambios']);
    });
  }

  cancel() {
    this.router.navigate(['cambios']);
  }

}

