import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/services/pruebas/pruebas.service';
import { Router } from '@angular/router';
import { Pruebas } from 'src/app/models/Pruebas'; 
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-crearpruebas',
  templateUrl: './crearpruebas.component.html',
  styleUrls: ['./crearpruebas.component.css']
})
export class CrearpruebasComponent implements OnInit {
  pruebas: Pruebas;
 // proyecto: number;
  observaciones: string;
  idProyecto: string;
  proyectos: Proyecto[];

    constructor(private pruebasService: PruebasService, private router: Router,
      private proyectoService: ProyectoService) { }
  
    ngOnInit() {
      this.getProyectos();
    }

    getProyectos() {
      this.proyectoService.getProyecto().subscribe(data => {
        this.proyectos = data;
      });
    }
  
    crear() {
      this.pruebas = new Pruebas();
  //    this.pruebas.proyecto = this.proyecto;
      this.pruebas.observaciones = this.observaciones;
          // tslint:disable-next-line: radix
    this.pruebas.proyecto = parseInt(this.idProyecto);

  
      this.pruebasService.createPruebas(this.pruebas).subscribe(() => {
        this.router.navigate(['pruebas']);
      });
    }
  
    cancel() {
      this.router.navigate(['pruebas']);
    }
   
  }