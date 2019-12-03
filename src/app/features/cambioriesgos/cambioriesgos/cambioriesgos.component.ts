import { Component, OnInit } from '@angular/core';
import {CambioriesgosService } from 'src/app/services/cambioriesgos/cambioriesgos.service';
import { Router } from '@angular/router';
import { CambioRiesgo } from 'src/app/models/CambioRiesgos';

@Component({
  selector: 'app-cambioriesgos',
  templateUrl: './cambioriesgos.component.html',
  styleUrls: ['./cambioriesgos.component.css']
})
export class CambioriesgosComponent implements OnInit {

  cambioRiesgos: CambioRiesgo[];

  constructor(private cambioRiesgoService: CambioriesgosService, private router: Router) { }

  ngOnInit() {
    this.getCambioRiesgos();
  }

  getCambioRiesgos() {
    this.cambioRiesgoService.getCambioRiesgos().subscribe(data => {
      this.cambioRiesgos = data;
      console.log(this.cambioRiesgos);
    });
  }

  crear() {
    this.router.navigate(['crearcambioriesgos']);
  }

  editar(id: number) {
    this.router.navigate(['editarcambioriesgos', id]);
  }

  deleteCambioRiesgos(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.cambioRiesgoService.deleteCambioRiesgos(id).subscribe(() => {
        this.getCambioRiesgos();
      });
    }
  }

}