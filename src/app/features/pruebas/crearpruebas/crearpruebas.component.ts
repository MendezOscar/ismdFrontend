import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/services/pruebas/pruebas.service';
import { Router } from '@angular/router';
import { Pruebas } from 'src/app/models/Pruebas';

@Component({
  selector: 'app-crearpruebas',
  templateUrl: './crearpruebas.component.html',
  styleUrls: ['./crearpruebas.component.css']
})
export class CrearpruebasComponent implements OnInit {
  pruebas: Pruebas;
  proyecto: number;
  observaciones: string;

    constructor(private pruebasService: PruebasService, private router: Router) { }
  
    ngOnInit() {
    }
  
    crear() {
      this.pruebas = new Pruebas();
      this.pruebas.proyecto = this.proyecto;
      this.pruebas.observaciones = this.observaciones;

  
      this.pruebasService.createPruebas(this.pruebas).subscribe(() => {
        this.router.navigate(['pruebas']);
      });
    }
  
    cancel() {
      this.router.navigate(['pruebas']);
    }
   
  }