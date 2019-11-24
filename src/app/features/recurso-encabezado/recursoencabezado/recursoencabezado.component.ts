import { Component, OnInit } from '@angular/core';
import { RecursoencabezadoService } from 'src/app/services/recursoencabezado/recursoencabezado.service';
import { Router } from '@angular/router';
import { RecursoEncabezado } from 'src/app/models/RecursoEncabezado';

@Component({
  selector: 'app-recursoencabezado',
  templateUrl: './recursoencabezado.component.html',
  styleUrls: ['./recursoencabezado.component.css']
})
export class RecursoencabezadoComponent implements OnInit {
  recursoEncabezado: RecursoEncabezado[];
  constructor(private recursoEncabezadoService: RecursoencabezadoService, private router: Router) { }

  ngOnInit() {
    this.getRecursoEncabezado();
  }


  getRecursoEncabezado() {
    this.recursoEncabezadoService.getRecursoEncabezazdo().subscribe(data => {
      this.recursoEncabezado = data;
      console.log(this.recursoEncabezado);
    });
  }

  crear() {
    this.router.navigate(['crearrecursoencabezado']);
  }

  editar(id: number) {
    this.router.navigate(['editarrecursoencabezado', id]);
  }

  deleteRecursoEncabezado(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.recursoEncabezadoService.deleteRecursoEncabezado(id).subscribe(() => {
        this.getRecursoEncabezado();
      });
    }
  }

}