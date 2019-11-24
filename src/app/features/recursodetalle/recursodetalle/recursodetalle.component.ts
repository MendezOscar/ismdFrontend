import { Component, OnInit } from '@angular/core';
import { RecursodetalleService } from 'src/app/services/recursodetalle/recursodetalle.service';
import { Router } from '@angular/router';
import { RecursoDetalle } from 'src/app/models/RecursoDetalle';

@Component({
  selector: 'app-recursodetalle',
  templateUrl: './recursodetalle.component.html',
  styleUrls: ['./recursodetalle.component.css']
})
export class RecursodetalleComponent implements OnInit {
  recursoDetalle: RecursoDetalle[];
  constructor(private recursoDetalleService: RecursodetalleService, private router: Router) { }

  ngOnInit() {
    this.getRecursoDetalle();
  }


  getRecursoDetalle() {
    this.recursoDetalleService.getRecursoDetalle().subscribe(data => {
      this.recursoDetalle = data;
      console.log(this.recursoDetalle);
    });
  }

  crear() {
    this.router.navigate(['crearrecursodetalle']);
  }

  editar(id: number) {
    this.router.navigate(['editarrecursodetalle', id]);
  }

  deleteRecursoDetalle(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.recursoDetalleService.deleteRecursoDetalle(id).subscribe(() => {
        this.getRecursoDetalle();
      });
    }
  }

}