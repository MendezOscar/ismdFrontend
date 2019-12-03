import { Component, OnInit } from '@angular/core';
import { RecursodetalleService } from 'src/app/services/recursodetalle/recursodetalle.service';
import { Router } from '@angular/router';
import { RecursoDetalle } from 'src/app/models/RecursoDetalle';
import { RecursoencabezadoService } from 'src/app/services/recursoencabezado/recursoencabezado.service';
import { RecursoEncabezado } from 'src/app/models/RecursoEncabezado';

@Component({
  selector: 'app-crearrecursodetalle',
  templateUrl: './crearrecursodetalle.component.html',
  styleUrls: ['./crearrecursodetalle.component.css']
})
export class CrearrecursodetalleComponent implements OnInit {
  recursoDetalle: RecursoDetalle;
 // idrecurso: number;
  capacidad: string;
  idRecurso: string;
  recurso: RecursoEncabezado[];
  constructor( private recursoDetalleService: RecursodetalleService,
    private recursoEncabezadoService: RecursoencabezadoService, private router: Router) { }

  ngOnInit() {
    this.getRecursoEncabezado();
  }

  getRecursoEncabezado() {
    this.recursoEncabezadoService.getRecursoEncabezazdo().subscribe(data => {
      this.recurso = data;
    });
  }

  crear() {
    this.recursoDetalle = new RecursoDetalle();
        // tslint:disable-next-line: radix
        this.recursoDetalle.idRecurso = parseInt(this.idRecurso);
 //   this.recursoDetalle.idRecurso= this.idrecurso;
    this.recursoDetalle.capacidad= this.capacidad;

    this.recursoDetalleService.createRecursoDetalle(this.recursoDetalle).subscribe(() => {
      this.router.navigate(['recursodetalle']);
    });
  }

  cancel() {
    this.router.navigate(['recursodetalle']);
  }

}