import { Component, OnInit } from '@angular/core';
import { RiesgoService } from 'src/app/services/riesgo/riesgo.service';
import { Router } from '@angular/router';
import { Riesgo } from 'src/app/models/Riesgo';

@Component({
  selector: 'app-crearriesgo',
  templateUrl: './crearriesgo.component.html',
  styleUrls: ['./crearriesgo.component.css']
})
export class CrearriesgoComponent implements OnInit {

  riesgo: Riesgo;
  nombre: string;
  descripcion: string;
  tipo: string;

  constructor(private riesgoService: RiesgoService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.riesgo = new Riesgo();
    this.riesgo.nombre = this.nombre;
    this.riesgo.descripcion = this.descripcion;
    this.riesgo.tipo = this.tipo;


    this.riesgoService.createRiesgo(this.riesgo).subscribe(() => {
      this.router.navigate(['riesgo']);
    });
  }

  cancel() {
    this.router.navigate(['riesgo']);
  }

}

