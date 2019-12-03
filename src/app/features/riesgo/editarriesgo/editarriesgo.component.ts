import { Component, OnInit } from '@angular/core';
import { RiesgoService } from 'src/app/services/riesgo/riesgo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Riesgo } from 'src/app/models/Riesgo';


@Component({
  selector: 'app-editarriesgo',
  templateUrl: './editarriesgo.component.html',
  styleUrls: ['./editarriesgo.component.css']
})
export class EditarriesgoComponent implements OnInit {

  riesgo: Riesgo;
  nombre: string;
  descripcion: string;
  tipo: string;

  constructor(private riesgoService: RiesgoService, private router: Router,
              private route: ActivatedRoute) {
                this.riesgo = new Riesgo();
              }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getRiesgoById(id);
  }

  getRiesgoById(id: number) {
    this.riesgoService.getRiesgoById(id).subscribe(data => {
      this.riesgo = data;
      this.nombre = this.riesgo.nombre;
      this.descripcion = this.riesgo.descripcion;
      this.tipo = this.riesgo.tipo;
    });
  }

  editar() {
    this.riesgo.nombre = this.nombre;
    this.riesgo.descripcion = this.descripcion;
    this.riesgo.tipo = this.tipo;

    this.riesgoService.editRiesgo(this.riesgo).subscribe(() => {
      this.router.navigate(['riesgo']);
    });
  }

  cancel (){
    this.router.navigate(['riesgo']);
  }

}

