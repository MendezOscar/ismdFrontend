import { Component, OnInit } from '@angular/core';
import { RecursoencabezadoService } from 'src/app/services/recursoencabezado/recursoencabezado.service';
import { Router, ActivatedRoute } from '@angular/router';
import{ RecursoEncabezado} from 'src/app/models/RecursoEncabezado';

@Component({
  selector: 'app-editarrecursoencabezado',
  templateUrl: './editarrecursoencabezado.component.html',
  styleUrls: ['./editarrecursoencabezado.component.css']
})
export class EditarrecursoencabezadoComponent implements OnInit {
  recursoEncabezado: RecursoEncabezado;
  recursoId: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  costo: number;

  constructor(private recursoEncabezadoService: RecursoencabezadoService, private router: Router,
    private route: ActivatedRoute) {
      this.recursoEncabezado= new RecursoEncabezado();
     }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getRecursoEncabezadoById(id);
  }

  getRecursoEncabezadoById(id: number) {
    this.recursoEncabezadoService.getRecursoEncabezadoById(id).subscribe(data => {
      this.recursoEncabezado = data;
      this.nombre = this.recursoEncabezado.nombre;
      this.descripcion = this.recursoEncabezado.descripcion;
      this.tipo = this.recursoEncabezado.tipo;
      this.costo = this.recursoEncabezado.costo;
      
    });
  }

  editar() {
    this.recursoEncabezado.nombre = this.nombre;
    this.recursoEncabezado.descripcion = this.descripcion;
    this.recursoEncabezado.tipo = this.tipo;
    this.recursoEncabezado.costo = this.costo;

    this.recursoEncabezadoService.editRecursoEncabezado(this.recursoEncabezado).subscribe(() => {
      this.router.navigate(['recursoencabezado']);
    });
  }

  cancel (){
    this.router.navigate(['recursoencabezado']);
  }

}
