import { Component, OnInit } from '@angular/core';
import { ModeloentregaService } from 'src/app/services/modeloentrega/modeloentrega.service';
import { Router } from '@angular/router';
import { ModeloEntrega } from 'src/app/models/ModeloEntrega';

@Component({
  selector: 'app-modeloentrega',
  templateUrl: './modeloentrega.component.html',
  styleUrls: ['./modeloentrega.component.css']
})
export class ModeloentregaComponent implements OnInit {
  modeloEntrega: ModeloEntrega[];

  constructor(private modeloEntregaSerive: ModeloentregaService, private router: Router) { }

  ngOnInit() {
    this.getModeloEntrega();
  }

  getModeloEntrega() {
    this.modeloEntregaSerive.getModeloEntrega().subscribe(data => {
      this.modeloEntrega = data;
      console.log(this.modeloEntrega);
    });
  }

  crear() {
    this.router.navigate(['crearmodeloentrega']);
  }

  editar(id: number) {
    this.router.navigate(['editarmodeloentrega', id]);
  }

  deleteModeloEntrega(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.modeloEntregaSerive.deleteModeloEntrega(id).subscribe(() => {
        this.getModeloEntrega();
      });
    }
  }

}
