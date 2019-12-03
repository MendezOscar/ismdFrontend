import { Component, OnInit } from '@angular/core';
import { RecursodetalleService } from 'src/app/services/recursodetalle/recursodetalle.service';
import { Router } from '@angular/router';
import { RecursoDetalle } from 'src/app/models/RecursoDetalle';
 
@Component({
  selector: 'app-crearrecursodetalle',
  templateUrl: './crearrecursodetalle.component.html',
  styleUrls: ['./crearrecursodetalle.component.css']
})
export class CrearrecursodetalleComponent implements OnInit {
  recursoDetalle: RecursoDetalle;
  idrecurso: number;
  capacidad: string;
  constructor( private recursoDetalleService: RecursodetalleService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.recursoDetalle = new RecursoDetalle();
    this.recursoDetalle.idRecurso= this.idrecurso;
    this.recursoDetalle.capacidad= this.capacidad;

    this.recursoDetalleService.createRecursoDetalle(this.recursoDetalle).subscribe(() => {
      this.router.navigate(['recursodetalle']);
    });
  }

  cancel() {
    this.router.navigate(['recursodetalle']);
  }

}