import { Component, OnInit } from '@angular/core';
import { RecursodetalleService } from 'src/app/services/recursodetalle/recursodetalle.service';
import { Router, ActivatedRoute } from '@angular/router';
import{ RecursoDetalle} from 'src/app/models/RecursoDetalle';
@Component({
  selector: 'app-editarrecursodetalle',
  templateUrl: './editarrecursodetalle.component.html',
  styleUrls: ['./editarrecursodetalle.component.css']
})
export class EditarrecursodetalleComponent implements OnInit {
  recursoDetalle: RecursoDetalle;
  recursoDetId: number;
  idRecurso: number;
  capacidad: string;

  constructor(private recursoDetalleService: RecursodetalleService, private router: Router,
    private route: ActivatedRoute) {
      this.recursoDetalle= new RecursoDetalle;
     }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getRecursoDetalleById(id);
  }

  getRecursoDetalleById(id: number) {
    this.recursoDetalleService.getRecursoDetalleById(id).subscribe(data => {
      this.recursoDetalle = data;
      this.idRecurso = this.recursoDetalle.idRecurso;
      this.capacidad = this.recursoDetalle.capacidad;      
    });
  }

  editar() {
    this.recursoDetalle.idRecurso = this.idRecurso;
    this.recursoDetalle.capacidad = this.capacidad;

    this.recursoDetalleService.editRecursoDetalle(this.recursoDetalle).subscribe(() => {
      this.router.navigate(['recursodetalle']);
    });
  }

  cancel (){
    this.router.navigate(['recursodetalle']);
  }

}