import { Component, OnInit } from '@angular/core';
import { RecursoencabezadoService } from 'src/app/services/recursoencabezado/recursoencabezado.service';
import { Router } from '@angular/router';
import { RecursoEncabezado } from 'src/app/models/RecursoEncabezado';
@Component({
  selector: 'app-crearrecursoencabezado',
  templateUrl: './crearrecursoencabezado.component.html',
  styleUrls: ['./crearrecursoencabezado.component.css']
})
export class CrearrecursoencabezadoComponent implements OnInit {
  recursoEncabezado: RecursoEncabezado;
  nombre: string;
  descripcion: string;
  tipo: string;
  costo: number;

  constructor(private recursoEncabezadoService: RecursoencabezadoService, private router: Router) { }

  ngOnInit() {
  }


  crear() {
    this.recursoEncabezado = new RecursoEncabezado();
    this.recursoEncabezado.nombre= this.nombre;
    this.recursoEncabezado.descripcion= this.descripcion;
    this.recursoEncabezado.tipo = this.tipo;
    this.recursoEncabezado.costo = this.costo;

    this.recursoEncabezadoService.createRecursoEncabezado(this.recursoEncabezado).subscribe(() => {
      this.router.navigate(['recursoencabezado']);
    });
  }

  cancel() {
    this.router.navigate(['recursoencabezado']);
  }

}
