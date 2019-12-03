import { Component, OnInit } from '@angular/core';
import { RecursocambioService } from 'src/app/services/recursocambio/recursocambio.service';
import { Router } from '@angular/router';
import { RecursoCambio } from 'src/app/models/RecursoCambio';
import { RecursoencabezadoService } from 'src/app/services/recursoencabezado/recursoencabezado.service';
import { RecursoEncabezado } from 'src/app/models/RecursoEncabezado';
@Component({
  selector: 'app-crearrecursocambio',
  templateUrl: './crearrecursocambio.component.html',
  styleUrls: ['./crearrecursocambio.component.css']
})
export class CrearrecursocambioComponent implements OnInit {

  recursoCambio: RecursoCambio;
 // recursoId: number;
  idRecurso: string;
  recurso: RecursoEncabezado[];
  constructor(private recursoCambioService: RecursocambioService,
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
    this.recursoCambio = new RecursoCambio();
 //   this.recursoCambio.recursoId = this.recursoId;
 this.recursoCambio.recursoId = parseInt(this.idRecurso);
    this.recursoCambioService.createRecursoCambio(this.recursoCambio).subscribe(() => {
      this.router.navigate(['recursocambio']);
    });
  }

  cancel() {
    this.router.navigate(['recursocambio']);
  }
 
}