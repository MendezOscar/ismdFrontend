import { Component, OnInit } from '@angular/core';
import { ModeloentregaService } from 'src/app/services/modeloentrega/modeloentrega.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloEntrega } from 'src/app/models/ModeloEntrega';

@Component({
  selector: 'app-editarmodeloentrega',
  templateUrl: './editarmodeloentrega.component.html',
  styleUrls: ['./editarmodeloentrega.component.css']
})
export class EditarmodeloentregaComponent implements OnInit {
  modeloEntrega: ModeloEntrega;
  tipo: string;
  modeloId: string;

  constructor(private modeloEntregaService: ModeloentregaService, private router: Router,
              private route: ActivatedRoute) {
                this.modeloEntrega = new ModeloEntrega(); 
              }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getModeloEntregaById(id);
  } 

  getModeloEntregaById(id: number) {
    this.modeloEntregaService.getModeloEntregaById(id).subscribe(data => {
      this.modeloEntrega = data;
      this.tipo = this.modeloEntrega.tipo;
    });
  }

  editar() {
    this.modeloEntrega.tipo = this.tipo;

    this.modeloEntregaService.editModeloEntrega(this.modeloEntrega).subscribe(() => {
      this.router.navigate(['modeloentrega']);
    });
  }

  cancel (){
    this.router.navigate(['modeloentrega']);
  }

}
