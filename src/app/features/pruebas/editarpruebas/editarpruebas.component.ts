import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/services/pruebas/pruebas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pruebas } from 'src/app/models/Pruebas';
@Component({
  selector: 'app-editarpruebas',
  templateUrl: './editarpruebas.component.html',
  styleUrls: ['./editarpruebas.component.css']
})
export class EditarpruebasComponent implements OnInit {
  pruebas: Pruebas;
  proyecto: number;
  observaciones: string;
 
    constructor(private pruebasService: PruebasService, private router: Router,
                private route: ActivatedRoute) {
                  this.pruebas = new Pruebas(); 
                }
  
    ngOnInit() {
      // tslint:disable-next-line: radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getPruebasById(id);
    } 
  
    getPruebasById(id: number) {
      this.pruebasService.getPruebasById(id).subscribe(data => {
        this.pruebas = data;
        this.proyecto = this.pruebas.proyecto;
        this.observaciones = this.pruebas.observaciones;
      });
    }
  
    editar() {
      this.pruebas.proyecto = this.proyecto;
      this.pruebas.observaciones= this.observaciones;
      this.pruebasService.editPruebas(this.pruebas).subscribe(() => {
        this.router.navigate(['pruebas']);
      });
    }
  
    cancel (){
      this.router.navigate(['pruebas']);
    }
  
  }
  