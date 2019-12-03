import { Component, OnInit } from '@angular/core';
import { ModeloentregaService } from 'src/app/services/modeloentrega/modeloentrega.service';
import { Router } from '@angular/router';
import { ModeloEntrega } from 'src/app/models/ModeloEntrega';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
@Component({
  selector: 'app-crearmodeloentrega',
  templateUrl: './crearmodeloentrega.component.html',
  styleUrls: ['./crearmodeloentrega.component.css']
})
export class CrearmodeloentregaComponent implements OnInit {
  modeloEntrega: ModeloEntrega;
  tipo: string;
  idProyecto: string;
  proyectos: Proyecto[];

  constructor(private modeloEntregaService: ModeloentregaService,
    private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectos = data;
    });
  }

  crear() {
    this.modeloEntrega = new ModeloEntrega();
    this.modeloEntrega.tipo = this.tipo;
    this.modeloEntrega.idProtecto = parseInt(this.idProyecto);

    this.modeloEntregaService.createModeloEntrega(this.modeloEntrega).subscribe(() => {
      this.router.navigate(['modeloentrega']);
    });
  }

  cancel() {
    this.router.navigate(['modeloentrega']);
  }
 
}
