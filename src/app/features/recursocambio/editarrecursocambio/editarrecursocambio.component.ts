import { Component, OnInit } from '@angular/core';
import { RecursocambioService } from 'src/app/services/recursocambio/recursocambio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecursoCambio } from 'src/app/models/RecursoCambio';
import { RecursoencabezadoService } from 'src/app/services/recursoencabezado/recursoencabezado.service';
import { RecursoEncabezado } from 'src/app/models/RecursoEncabezado';

@Component({
  selector: 'app-editarrecursocambio',
  templateUrl: './editarrecursocambio.component.html',
  styleUrls: ['./editarrecursocambio.component.css']
})
export class EditarrecursocambioComponent implements OnInit {
    recursoCambio: RecursoCambio;
 //   recursoId: number;
 idRecurso: string;
 recurso: RecursoEncabezado[];
    recursoCambioId: number;
  
    constructor(private recursoCambioService: RecursocambioService, private router: Router,
      private recursoEncabezadoService: RecursoencabezadoService,
                private route: ActivatedRoute) {
                  this.recursoCambio = new RecursoCambio(); 
                }
  
    ngOnInit() {
      // tslint:disable-next-line: radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getRecursoCambioById(id);
      this.getRecursoEncabezado();
    } 

    getRecursoEncabezado() {
      this.recursoEncabezadoService.getRecursoEncabezazdo().subscribe(data => {
        this.recurso = data;
      });
    }
  
    getRecursoCambioById(id: number) {
      this.recursoCambioService.getRecursoCambioById(id).subscribe(data => {
        this.recursoCambio = data;
       // this.recursoId = this.recursoCambio.recursoId;
      });
    }
  
    editar() {
     // this.recursoCambio.recursoId = this.recursoId;
     this.recursoCambio.recursoId = parseInt(this.idRecurso);
      this.recursoCambioService.editRecursoCambio(this.recursoCambio).subscribe(() => {
        this.router.navigate(['recursocambio']);
      });
    }
  
    cancel (){
      this.router.navigate(['recursocambio']);
    }
  
  }
  