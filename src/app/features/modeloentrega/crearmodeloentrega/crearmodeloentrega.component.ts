import { Component, OnInit } from '@angular/core';
import { ModeloentregaService } from 'src/app/services/modeloentrega/modeloentrega.service';
import { Router } from '@angular/router';
import { ModeloEntrega } from 'src/app/models/ModeloEntrega';

@Component({
  selector: 'app-crearmodeloentrega',
  templateUrl: './crearmodeloentrega.component.html',
  styleUrls: ['./crearmodeloentrega.component.css']
})
export class CrearmodeloentregaComponent implements OnInit {
  modeloEntrega: ModeloEntrega;
  tipo: string;

  constructor(private modeloEntregaService: ModeloentregaService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.modeloEntrega = new ModeloEntrega();
    this.modeloEntrega.tipo = this.tipo;

    this.modeloEntregaService.createModeloEntrega(this.modeloEntrega).subscribe(() => {
      this.router.navigate(['modeloentrega']);
    });
  }

  cancel() {
    this.router.navigate(['modeloentrega']);
  }

}
