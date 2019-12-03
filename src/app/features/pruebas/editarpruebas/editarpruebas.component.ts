import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/services/pruebas/pruebas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pruebas } from 'src/app/models/Pruebas';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-editarpruebas',
  templateUrl: './editarpruebas.component.html',
  styleUrls: ['./editarpruebas.component.css']
})
export class EditarpruebasComponent implements OnInit {
  pruebas: Pruebas;
//  proyecto: number;
  observaciones: string;
  idProyecto: string;
  proyectos: Proyecto[];
 
    constructor(private pruebasService: PruebasService, private router: Router,
      private proyectoService: ProyectoService,
                private route: ActivatedRoute) {
                  this.pruebas = new Pruebas(); 
                  
                }
  
    ngOnInit() {
      // tslint:disable-next-line: radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getPruebasById(id);
      this.getProyectos();
    } 
  
    getProyectos() {
      this.proyectoService.getProyecto().subscribe(data => {
        this.proyectos = data;
      });
    }
    getPruebasById(id: number) {
      this.pruebasService.getPruebasById(id).subscribe(data => {
        this.pruebas = data;
      //  this.proyecto = this.pruebas.proyecto;
        this.observaciones = this.pruebas.observaciones;
      });
    }
  
    editar() {
     // this.pruebas.proyecto = this.proyecto;
      this.pruebas.observaciones= this.observaciones;
          // tslint:disable-next-line: radix
    this.pruebas.proyecto = parseInt(this.idProyecto);

      this.pruebasService.editPruebas(this.pruebas).subscribe(() => {
        this.router.navigate(['pruebas']);
      });
    }
  
    cancel (){
      this.router.navigate(['pruebas']);
    }
  
  }
  