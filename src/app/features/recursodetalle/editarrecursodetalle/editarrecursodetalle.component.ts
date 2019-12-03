import { Component, OnInit } from '@angular/core';
import { RecursodetalleService } from 'src/app/services/recursodetalle/recursodetalle.service';
import { Router, ActivatedRoute } from '@angular/router';
import{ RecursoDetalle} from 'src/app/models/RecursoDetalle';
import { RecursoencabezadoService } from 'src/app/services/recursoencabezado/recursoencabezado.service';
import { RecursoEncabezado } from 'src/app/models/RecursoEncabezado';

@Component({
  selector: 'app-editarrecursodetalle',
  templateUrl: './editarrecursodetalle.component.html',
  styleUrls: ['./editarrecursodetalle.component.css']
})
export class EditarrecursodetalleComponent implements OnInit {
  recursoDetalle: RecursoDetalle;
  recursoDetId: number;
 // idRecurso: number;
  idRecurso: string;
  recurso: RecursoEncabezado[];
  capacidad: string;

  constructor(private recursoDetalleService: RecursodetalleService,
    private recursoEncabezadoService: RecursoencabezadoService, private router: Router,
    private route: ActivatedRoute) {
      this.recursoDetalle= new RecursoDetalle;
     }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getRecursoDetalleById(id);
    this.getRecursoEncabezado();
  }

  getRecursoEncabezado() {
    this.recursoEncabezadoService.getRecursoEncabezazdo().subscribe(data => {
      this.recurso = data;
    });
  }

  getRecursoDetalleById(id: number) {
    this.recursoDetalleService.getRecursoDetalleById(id).subscribe(data => {
      this.recursoDetalle = data;
    //  this.idRecurso = this.recursoDetalle.idRecurso;
      this.capacidad = this.recursoDetalle.capacidad;      
    });
  }

  editar() {       
     // tslint:disable-next-line: radix
    this.recursoDetalle.idRecurso = parseInt(this.idRecurso);
    this.recursoDetalle.capacidad = this.capacidad;

    this.recursoDetalleService.editRecursoDetalle(this.recursoDetalle).subscribe(() => {
      this.router.navigate(['recursodetalle']);
    });
  }

  cancel (){
    this.router.navigate(['recursodetalle']);
  }

}